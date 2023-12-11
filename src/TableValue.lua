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

local TableValue = {}

function TableValue.new<T>(tab: T)
	local self = {} :: T & { Value: T, Changed: (any, any, any) -> () }
	self.Value = tab
	self.Changed = nop
	return setmetatable(self, meta)
end

return TableValue