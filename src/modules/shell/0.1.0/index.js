export function mount(targetId, ctx) {
  const el = document.getElementById(targetId) || document.body;
  const div = document.createElement("div");
  div.textContent = `RBP Shell v0.1.0 — tenant: ${ctx?.tenant?.domain ?? "unknown"}`;
  el.appendChild(div);
}
