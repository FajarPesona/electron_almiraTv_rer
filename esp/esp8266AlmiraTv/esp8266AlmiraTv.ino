#include "wifiHandle.h"

void setup() {
  Serial.begin(9600);
  Serial.println();
  Serial.println("start");
  initWiFi();
}

void loop() {
  server.handleClient();
//  Serial.println("1");
//  delay(1000);
}
