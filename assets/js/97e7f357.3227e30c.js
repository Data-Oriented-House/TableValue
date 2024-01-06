"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[484],{35891:n=>{n.exports=JSON.parse('{"functions":[{"name":"new","desc":"Returns a new proxy table to interface with the `.Value` table. Does not modify the `.Value` table or its metatable.\\n\\nThe callback is optional, if it is defined it will automatically update the fields in the table at initialization.\\n\\n```lua\\nlocal person = TableValue.new {\\n\\tname = \'Jim\',\\n\\tage = 9,\\n}\\n\\nfunction person.Changed(tab, key: string, new, old)\\n\\tprint(tab, key, new, old)\\nend\\n\\nperson.age += 1\\n-- print(\'age\', 10, 9)\\n\\nperson.Value.age += 1\\n-- No callback fires, this is how you can perform silent changes!\\n\\nlocal monster = TableValue.new({\\n\\ttype = \'large\',\\n\\thealth = 100,\\n\\tsecret = \'Loves chocolate\'\\n}, function(tab, key: string, new, old)\\n\\tprint(tab, key, new, old)\\nend)\\n-- print(\'health\', 100, nil)\\n-- print(\'type\', \\"large\\", nil)\\n-- print(\'secret\', \'Loves chocolate\', nil)\\n\\nmonster.health -= 10\\n-- print(\'health\', 90, 100)\\n\\nmonster.Value.secret ..= \' but is lactose intolerant\'\\n-- No callback fires, this is how you can perform silent changes!\\n\\n```\\n\\nIf the callback doesn\'t suit your fancy, you can make a small wrapper for it to use a signal instead!\\n\\n```lua\\nfunction MyValue.signal(tab: { [any]: any })\\n\\tlocal self = TableValue.new(tab)\\n\\n\\tself.Signal = Signal.new()\\n\\n\\tfunction self.Changed(tab, key, new, old)\\n\\t\\tself.Signal:Fire(key, new, old)\\n\\tend\\n\\n\\treturn self\\nend\\n\\nlocal person = MyValue.new {\\n\\tname = \'Jim\',\\n\\tage = 9,\\n}\\n\\nperson.Signal:Connect(function(key: string, new, old)\\n\\tprint(key, new, old)\\nend)\\n\\nperson.age += 1\\n-- print(\'age\', 10, 9)\\n\\nperson.Value.age += 1\\n-- No event fires, this is how you can perform silent changes!\\n```","params":[{"name":"tab","desc":"","lua_type":"T"},{"name":"changed","desc":"","lua_type":"(tab: T, key: any, new: any, old: any) -> ()?"}],"returns":[{"desc":"","lua_type":"T & { Value: T, Changed: (key: any, new: any, old: any) -> () }"}],"function_type":"static","source":{"line":96,"path":"src/init.lua"}},{"name":"insert","desc":"Mimics `table.insert`, except the index always comes last. By nature not as optimal as `table.insert` on a regular table.\\n\\n```lua\\nlocal myArray = TableValue.new {}\\n\\nfunction myArray.Changed(_, index, value)\\n\\tprint(index, value)\\nend\\n\\nTableValue.insert(myArray, \'World\')\\n-- print(1, \'World\')\\n\\nTableValue.insert(myArray, \'Hello\', 1)\\n-- print(2, \'World\')\\n-- print(1, \'Hello\')\\n\\nprint(myArray.Value)\\n-- { \'Hello\', \'World\' }\\n```","params":[{"name":"tab","desc":"","lua_type":"{ Value: { T } }"},{"name":"value","desc":"","lua_type":"T"},{"name":"index","desc":"","lua_type":"number?"}],"returns":[],"function_type":"static","source":{"line":136,"path":"src/init.lua"}},{"name":"remove","desc":"Mimics `table.remove`. By nature not as optimal as `table.remove` on a regular table.\\n\\n```lua\\nlocal myArray = TableValue.new { 3, \'hi\', Vector3.zero }\\n\\nfunction myArray.Changed(_, index, value)\\n\\tprint(index, value)\\nend\\n\\nTableValue.remove(myArray, 2)\\n-- print(2, Vector3.zero)\\n-- print(3, nil)\\n\\nTableValue.remove(myArray, 1)\\n-- print(1, Vector3.zero)\\n-- print(2, nil)\\n\\nprint(myArray.Value)\\n-- { Vector3.zero }\\n```","params":[{"name":"tab","desc":"","lua_type":"{ Value: { T } }"},{"name":"index","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"T"}],"function_type":"static","source":{"line":172,"path":"src/init.lua"}}],"properties":[],"types":[],"name":"TableValue","desc":"","source":{"line":20,"path":"src/init.lua"}}')}}]);