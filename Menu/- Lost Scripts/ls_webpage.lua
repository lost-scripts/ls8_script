-- **************************************************
-- Provide Moho with the name of this script object
-- **************************************************

ScriptName = "LS_Webpage"

-- **************************************************
-- General information about this script
-- **************************************************

LS_Webpage = {}

--LS_Webpage.BASE_STR = 2480

function LS_Webpage:Name(n) --name, ID
	return ({"Lost Scripts Webpage", "LS_Webpage"})[n or 1]
end

function LS_Webpage:Version()
	return "0.0.1"
end

function LS_Webpage:Description()
	return "Lost Scripts Webpage Direct Link"
end

function LS_Webpage:Creator()
	return "Rai López"
end

function LS_Webpage:UILabel()
	return "Lost Scripts Webpage..." --"- Tag Scripts Webpage..." -- - Tags Webpage... --🌐 
end

-- **************************************************
-- The guts of this Script
-- **************************************************

function LS_Webpage:IsEnabled(moho)
	return true
end

function LS_Webpage:Run(moho)
	local url = "https://github.com/lost-scripts/" --"https://lostastools.blogspot.com/"
	--[[
	if LS_Utilities:OS() == "unix" then
		os.execute('open "" "' .. url .. '"')
	else
		os.execute('start "" "' .. url .. '"')
	end
	--]]
	os.execute('start "" "' .. url .. '"')
end

