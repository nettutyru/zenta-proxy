// sub.js
const allowedKeys = ["checkup-proxy-key", "mangovuser"];
const subscriptionName = "⚡ ZENTA-PROXY";

async function loadSub() {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");

    if (!allowedKeys.includes(key)) {
        document.body.innerText = "# Access denied";
        return;
    }

    const res = await fetch("sub.txt");
    const text = await res.text();

    document.body.innerText = "# " + subscriptionName + "\n" + text;
}

loadSub();
