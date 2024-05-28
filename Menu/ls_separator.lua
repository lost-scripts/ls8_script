-- **************************************************
-- Provide Moho with the name of this script object
-- **************************************************

ScriptName = "LS_Separator"

-- **************************************************
-- General information about this script
-- **************************************************

LS_Separator = {}

--LS_Separator.BASE_STR = 2480

function LS_Separator:Name(n) --name, ID
	return ({"Menu Separator", "LS_Separator"})[n or 1]
end

function LS_Separator:Version()
	return "0.0.1"
end

function LS_Separator:Description()
	return "Menu Separator"
end

function LS_Separator:Creator()
	return "Rai López"
end

function LS_Separator:UILabel()
	return "-------------------------------" --"------------- MENU ------------" --"[ 📄 ]"
end

-- **************************************************
-- The guts of this Script
-- **************************************************

function LS_Separator:IsEnabled(moho)
	return false
end

function LS_Separator:Run(moho)
end

