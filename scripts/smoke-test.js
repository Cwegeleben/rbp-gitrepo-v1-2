const base = process.env.RBP_API_BASE || "http://localhost:3000/apps/rbp/api";
async function check(path) {
  const res = await fetch(`${base}${path}`);
  console.log(`${path} → ${res.status}`);
  try {
    const text = await res.text();
    console.log(text);
  } catch {}
}
(async () => {
  console.log("🔍 Running RBP smoke test...");
  await check("/access/ctx");
  await check("/catalog/collections");
  await check("/builds");
  await check("/checkout/package");
  console.log("✅ Smoke test complete");
})();
