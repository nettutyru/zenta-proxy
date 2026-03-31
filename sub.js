export default {
  async fetch(request) {
    const resp = await fetch("https://nettutyru.github.io/zenta-proxy/sub.txt");
    const text = await resp.text();

    return new Response(text, {
      headers: {
        "content-type": "text/plain",
        "profile-title": "БЕЛЫЙ САМУРАЙ ВПН @zenta_proxy"
      }
    });
  }
}
