// Pushsafer Things
var private_key = '{privatekey}';
var show_response_json = true;

// Translations
var Success = "Success";
var Error = "Error";
var OK = "OK";

// Style
var background_image = 1; // 1-10
var logo_background_color = 'rgba(255,255,255,0.75)';
var buttons_in_row = 2; // 1,2,3,4,6,12
var buttons_height = 100;

// Buttons
var Buttons = new Array();

// Button 1
Buttons[0] = new Object();
Buttons[0]["PS_Title"] = "Title 1";
Buttons[0]["PS_Message"] = "Message 1";
Buttons[0]["PS_Device"] = "{deviceid}";
Buttons[0]["PS_Sound"] = "1";
Buttons[0]["PS_Vibration"] = "0";
Buttons[0]["PS_Icon"] = "11";
Buttons[0]["PS_IconColor"] = "#FF0000";
Buttons[0]["PS_Priority"] = "0";
Buttons[0]["PS_Url"] = "https://www.pushsafer.com";
Buttons[0]["PS_UrlTitle"] = "Open Pushsafer";
Buttons[0]["PS_Answer"] = "1";
Buttons[0]["PS_AnswerOption"] = "Yes|No|Maybe";
Buttons[0]["PS_Confirm"] = "0";
Buttons[0]["ButtonColor"] = "rgba(33,150,243,0.5)";
Buttons[0]["ButtonBorderColor"] = "blue";
Buttons[0]["ButtonBorderRadius"] = "50";
Buttons[0]["ButtonTextColor"] = "white";
Buttons[0]["ButtonTextSize"] = "2";
Buttons[0]["ButtomName"] = "Button 1";

// Button 2
Buttons[1] = new Object();
Buttons[1]["PS_Title"] = "Title 2";
Buttons[1]["PS_Message"] = "Message 2";
Buttons[1]["PS_Device"] = "{deviceid}";
Buttons[1]["PS_Sound"] = "10";
Buttons[1]["PS_Vibration"] = "0";
Buttons[1]["PS_Icon"] = "11";
Buttons[1]["PS_IconColor"] = "#F0FF0F";	
Buttons[1]["PS_Priority"] = "1";
Buttons[1]["PS_Url"] = "https://www.pushsafer.com";
Buttons[1]["PS_UrlTitle"] = "Open Pushsafer";
Buttons[1]["PS_Answer"] = "1";
Buttons[1]["PS_AnswerOption"] = "Yes|No|Maybe";
Buttons[1]["PS_Confirm"] = "0";
Buttons[1]["ButtonColor"] = "rgba(255,0,0,0.7)";
Buttons[1]["ButtonBorderColor"] = "black";
Buttons[1]["ButtonBorderRadius"] = "50";
Buttons[1]["ButtonTextColor"] = "white";
Buttons[1]["ButtonTextSize"] = "2";
Buttons[1]["ButtomName"] = "Button 2";

// Button 3
Buttons[2] = new Object();
Buttons[2]["PS_Title"] = "Title 3";
Buttons[2]["PS_Message"] = "Message 3";
Buttons[2]["PS_Device"] = "{deviceid}";
Buttons[2]["PS_Sound"] = "40";
Buttons[2]["PS_Vibration"] = "2";
Buttons[2]["PS_Icon"] = "11";
Buttons[2]["PS_IconColor"] = "";
Buttons[2]["PS_Priority"] = "0";
Buttons[2]["PS_Url"] = "https://www.pushsafer.com";
Buttons[2]["PS_UrlTitle"] = "Open Pushsafer";
Buttons[2]["PS_Answer"] = "1";
Buttons[2]["PS_AnswerOption"] = "Yes|No|Maybe";
Buttons[2]["PS_Confirm"] = "0";
Buttons[2]["ButtonColor"] = "rgba(255,255,255,0.75)";
Buttons[2]["ButtonBorderColor"] = "black";
Buttons[2]["ButtonBorderRadius"] = "50";
Buttons[2]["ButtonTextColor"] = "black";
Buttons[2]["ButtonTextSize"] = "2";
Buttons[2]["ButtomName"] = "Button 3";

// Button 4
Buttons[3] = new Object();
Buttons[3]["PS_Title"] = "Title 4";
Buttons[3]["PS_Message"] = "Message 4";
Buttons[3]["PS_Device"] = "{deviceid}";
Buttons[3]["PS_Sound"] = "21";
Buttons[3]["PS_Vibration"] = "0";
Buttons[3]["PS_Icon"] = "11";
Buttons[3]["PS_IconColor"] = "#00FF00";
Buttons[3]["PS_Priority"] = "1";
Buttons[3]["PS_Url"] = "https://www.pushsafer.com";
Buttons[3]["PS_UrlTitle"] = "Open Pushsafer";
Buttons[3]["PS_Answer"] = "1";
Buttons[3]["PS_AnswerOption"] = "Yes|No|Maybe";
Buttons[3]["PS_Confirm"] = "0";
Buttons[3]["ButtonColor"] = "rgba(255,255,0,0.75)";
Buttons[3]["ButtonBorderColor"] = "black";
Buttons[3]["ButtonBorderRadius"] = "50";
Buttons[3]["ButtonTextColor"] = "black";
Buttons[3]["ButtonTextSize"] = "2";
Buttons[3]["ButtomName"] = "Button 4";

// Button 5
Buttons[4] = new Object();
Buttons[4]["PS_Title"] = "Title 5";
Buttons[4]["PS_Message"] = "Message 5";
Buttons[4]["PS_Device"] = "{deviceid}";
Buttons[4]["PS_Sound"] = "14";
Buttons[4]["PS_Vibration"] = "2";
Buttons[4]["PS_Icon"] = "41";
Buttons[4]["PS_IconColor"] = "#FF0000";
Buttons[4]["PS_Priority"] = "2";
Buttons[4]["PS_Url"] = "https://www.pushsafer.com";
Buttons[4]["PS_UrlTitle"] = "Open Pushsafer";
Buttons[4]["PS_Answer"] = "1";
Buttons[4]["PS_AnswerOption"] = "Yes|No|Maybe";
Buttons[4]["PS_Confirm"] = "0";
Buttons[4]["ButtonColor"] = "rgba(100,100,100,0.75)";
Buttons[4]["ButtonBorderColor"] = "black";
Buttons[4]["ButtonBorderRadius"] = "50";
Buttons[4]["ButtonTextColor"] = "black";
Buttons[4]["ButtonTextSize"] = "2";
Buttons[4]["ButtomName"] = "Button 5";

// Button 6
Buttons[5] = new Object();
Buttons[5]["PS_Title"] = "Title 6";
Buttons[5]["PS_Message"] = "Message 6";
Buttons[5]["PS_Device"] = "{deviceid}";
Buttons[5]["PS_Sound"] = "1";
Buttons[5]["PS_Vibration"] = "0";
Buttons[5]["PS_Icon"] = "11";
Buttons[5]["PS_IconColor"] = "#FF0000";
Buttons[5]["PS_Priority"] = "0";
Buttons[5]["PS_Url"] = "https://www.pushsafer.com";
Buttons[5]["PS_UrlTitle"] = "Open Pushsafer";
Buttons[5]["PS_Answer"] = "1";
Buttons[5]["PS_AnswerOption"] = "Yes|No|Maybe";
Buttons[5]["PS_Confirm"] = "10";
Buttons[5]["ButtonColor"] = "rgba(33,150,243,0.5)";
Buttons[5]["ButtonBorderColor"] = "blue";
Buttons[5]["ButtonBorderRadius"] = "50";
Buttons[5]["ButtonTextColor"] = "white";
Buttons[5]["ButtonTextSize"] = "2";
Buttons[5]["ButtomName"] = "Button 6";
