import { Webview } from "jsr:@webview/webview";

const webview = new Webview();
webview.navigate("https://cappabot.com/chatWebview");
webview.run();
