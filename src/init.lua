--!strict

local function nop(key: any, new: any, old: any) end

local meta = {}

function meta.__newindex(t, k, v)
	local old = t.Value[k]
	t.Value[k] = v
	t.Changed(k, v, old)
end

function meta.__index(t, k)
	return t.Value[k]
end

--[=[
	@class TableValue
]=]
local TableValue = {}

--[=[
	@within TableValue
	@return T & { Value: T, Changed: (key: any, new: any, old: any) -> () }

	Returns a new proxy table to interface with the `.Value` table. Does not modify the `.Value` table or its metatable.

	```lua
	local person = TableValue.new {
		name = 'Jim',
		age = 9,
	}

	function person.Changed(key: string, new, old)
		print(key, new, old)
	end

	person.age += 1
	-- print('age', 10, 9)

	person.Value.age += 1
	-- No callback fires, this is how you can perform silent changes!
	```

	If the callback doesn't suit your fancy, you can make a small wrapper for it to use a signal instead!

	```lua
	function MyValue.signal(tab: { [any]: any })
		local self = TableValue.new(tab)

		self.Signal = Signal.new()

		function self.Changed(key, new, old)
			self.Signal:Fire(key, new, old)
		end

		return self
	end

	local person = MyValue.new {
		name = 'Jim',
		age = 9,
	}

	person.Signal:Connect(function(key: string, new, old)
		print(key, new, old)
	end)

	person.age += 1
	-- print('age', 10, 9)

	person.Value.age += 1
	-- No event fires, this is how you can perform silent changes!
	```
]=]
function TableValue.new<T>(tab: T)
	local self = {} :: T & { Value: T, Changed: typeof(nop) }
	self.Value = tab
	self.Changed = nop
	return setmetatable(self, meta)
end

--[=[
	@within TableValue

	Mimics `table.insert`, except the index always comes last. By nature not as optimal as `table.insert` on a regular table.

	```lua
	local myArray = TableValue.new {}

	function myArray.Changed(index, value)
		print(index, value)
	end

	TableValue.insert(myArray, 'World')
	-- print(1, 'World')

	TableValue.insert(myArray, 'Hello', 1)
	-- print(2, 'World')
	-- print(1, 'Hello')

	print(myArray.Value)
	-- { 'Hello', 'World' }
	```
]=]
function TableValue.insert<T>(tab: { Value: { T } }, value: T, index: number?)
	if index then
		for i = #tab.Value, index, -1 do
			tab[i + 1] = tab.Value[i]
		end
		tab[index] = value
	else
		tab[#tab.Value + 1] = value
	end
end

--[=[
	@within TableValue
	@return T

	Mimics `table.remove`. By nature not as optimal as `table.remove` on a regular table.

	```lua
	local myArray = TableValue.new { 3, 'hi', Vector3.zero }

	function myArray.Changed(index, value)
		print(index, value)
	end

	TableValue.remove(myArray, 2)
	-- print(2, Vector3.zero)
	-- print(3, nil)

	TableValue.remove(myArray, 1)
	-- print(1, Vector3.zero)
	-- print(2, nil)

	print(myArray.Value)
	-- { Vector3.zero }
	```
]=]
function TableValue.remove<T>(tab: { Value: { T } }, index: number?)
	if index then
		local value = tab.Value[index]
		for i = index, #tab.Value do
			tab[i] = tab.Value[i + 1]
		end
		return value
	else
		local value = tab.Value[#tab.Value]
		tab[#tab.Value] = nil
		return value
	end
end

return TableValue