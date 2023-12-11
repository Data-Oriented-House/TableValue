--!strict

local function nop(key: any, new: any, old: any) end

local meta = {}

function meta.__newindex(t, k, v)
	local old = t.Value[k]
	t.Value[k] = v
	t.Changed:Fire(k, v, old)
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

	person.age += 10 -- print('age', 10, 9)
	```

	If the callback doesn't suit your fancy, you can make a small wrapper for it to use a signal instead!

	```lua
	function MyValue.signal(tab: { [any]: any })
		local self = TableValue.new(tab)

		self.Signal = Signal.new()

		function self.Callback(key, new, old)
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

	person.age += 10 -- print('age', 10, 9)
	```
]=]
function TableValue.new<T>(tab: T)
	local self = {} :: T & { Value: T, Changed: typeof(nop) }
	self.Value = tab
	self.Changed = nop
	return setmetatable(self, meta)
end

return TableValue