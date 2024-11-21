const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="adulvs47@gmail.com"
global.location="ᴋᴇʀᴇʟᴀ,ᴋᴏʟʟᴀᴍ."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/3ojen2.jpg" || "https://files.catbox.moe/3ojen2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/3ojen2.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_09_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDYxLFxuICAgICAgICAzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzLFxuICAgICAgICA2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExLFxuICAgICAgICAxODYsXG4gICAgICAgIDMzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDgwLFxuICAgICAgICA5NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxLFxuICAgICAgICA2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjExLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDc4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM4LFxuICAgICAgICA0NixcbiAgICAgICAgODEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA4MixcbiAgICAgICAgOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXR21WeldLY001SE5DM2RTS1c3eU5RTTIweVB0ZVdra3M1c0N2TmdLb0tjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvbHJLU0s3cVR0MlA2UHlrU1VuYzJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI0ZDg5ODk2LTNlY2MtNGIxZC04ZmVlLWU5ODRhY2ZjNGYwN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDEwNSxcbiAgICAgIDEsXG4gICAgICAyMzUsXG4gICAgICAxNDksXG4gICAgICA2MSxcbiAgICAgIDE2LFxuICAgICAgODIsXG4gICAgICA4OCxcbiAgICAgIDIwOCxcbiAgICAgIDE2OSxcbiAgICAgIDE1NixcbiAgICAgIDIyNyxcbiAgICAgIDIzMyxcbiAgICAgIDMwLFxuICAgICAgMTg4LFxuICAgICAgMjI2LFxuICAgICAgMjM4LFxuICAgICAgMTQwLFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAxOTMsXG4gICAgICAxNjAsXG4gICAgICAxNjUsXG4gICAgICA1MCxcbiAgICAgIDU3LFxuICAgICAgODMsXG4gICAgICA4MixcbiAgICAgIDcyLFxuICAgICAgMTkwLFxuICAgICAgMTEzLFxuICAgICAgMTc5LFxuICAgICAgMTkyLFxuICAgICAgMTU2LFxuICAgICAgMTIzLFxuICAgICAgMjAyLFxuICAgICAgMTU1LFxuICAgICAgODYsXG4gICAgICAxOTksXG4gICAgICAxNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkRKTTZFV0RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTA3NDQwMzI0MDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTI2NDIyMDE3MzEwODc6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPVGl5VjBReTQzOHVRWVlDQ0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFQSWdnZFdDU1lOWXpQdWFGbVg1cHpoQU5vTVJUVEkxeFRmVEFtWW9kM1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicVpBTzB6dVA0bUZndGkxTzVyZG8xQUtIVVp4ckMySVNadlZjd0w0THVXWm03bXd1eEJJOXVMTjZ6WERxRlVwT21KRGUyTm1malRpd2k1cElIL0QwQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ3ZzQ29pNlFyTW5NazQ2ODNyaytGYnFhWWg4cXRtWlJGNXViQmVGSlhUMDhnbU9icjQ4THhxcDM2ZEdCN1VVRzhvd2d6c2NYY2s4SUhzU0UveEFkQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5MDc0NDAzMjQwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMTgzNzU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUGZqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQZmouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnbm05MTFudW81eExqd1VVTWVxbzRCSlhvTVNmYVpxY01ueHE0T3J2clRnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NjI0MzgxMixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "xᴇɴᴀ-ᴍᴅ🧚🏻‍♂️❗",
  ownername:process.env.OWNER_NAME|| "ᴀᴅᴜʟ-xᴇʀ💗🕊️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ᴀᴅᴜʟ-xᴇʀ💗🕊️"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
