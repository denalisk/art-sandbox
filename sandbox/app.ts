import { DemoFunction } from "./test";

var thing = new DemoFunction();

if (document.readyState !== 'loading') {
    thing.triggerFunction();
} else {
    document.addEventListener('DOMContentLoaded', thing.triggerFunction);
}