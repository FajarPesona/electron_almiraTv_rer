#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

const char* ssid     = "FAJAR";
const char* password = "fajarpesona"; 

//const char* ssid     = "ALMIRA_JWS276";
//const char* password = "almira1234";   
IPAddress ip(192,168,11,4);
IPAddress gateway(192,168,11,1);
IPAddress subnet(255,255,255,0);
ESP8266WebServer server;

void relayOn() {
  Serial.println("relay on");
  server.send(200, "text/plain", "Ok");
}


void initWiFi(){    
  WiFi.mode(WIFI_AP);
  WiFi.softAP(ssid, password, 1);
//  WiFi.softAPConfig(ip, gateway, subnet);
  WiFi.config(ip, gateway, subnet);
  IPAddress IP = WiFi.softAPIP();  
  Serial.println(IP);
  
  server.on("/relayOn", relayOn);
  server.begin();

//  Serial.print("Connecting to ");
//  Serial.println(ssid);
//  WiFi.begin(ssid, password);
//  while (WiFi.status() != WL_CONNECTED) {
//    delay(500);
//    Serial.print(".");
//  }
//  // Print local IP address and start web server
//  Serial.println("");
//  Serial.println("WiFi connected.");
//  Serial.println("IP address: ");
//  Serial.println(WiFi.localIP());
//  server.on("/relayOn", relayOn);
//  server.begin();
}
