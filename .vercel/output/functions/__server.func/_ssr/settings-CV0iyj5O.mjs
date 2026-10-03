import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as toFaDigits } from "./utils-BCpgNeBK.mjs";
import { a as planLabel, c as useApp } from "./store-D2eEpdmy.mjs";
import { t as AppShell } from "./AppShell-BWDf7iIu.mjs";
import { n as Surface, t as PageHeader } from "./PageHeader-COnGV0eU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CV0iyj5O.js
var import_jsx_runtime = require_jsx_runtime();
function SettingsPage() {
	const user = useApp((s) => s.user);
	const clients = useApp((s) => s.clients);
	const cases = useApp((s) => s.cases);
	const resetDemo = useApp((s) => s.resetDemo);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "تنظیمات",
			subtitle: "فضای کاری نمایشی دفتر وکالت رضایی"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Surface, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 font-semibold text-navy",
						children: "دفتر"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "نام Workspace",
						v: "دفتر وکالت رضایی"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "نوع",
						v: "دفتر وکالت"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "پلن",
						v: planLabel[user?.plan ?? "pro"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "تعداد موکل",
						v: toFaDigits(clients.length)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "تعداد پرونده",
						v: toFaDigits(cases.length)
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Surface, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-4 font-semibold text-navy",
						children: "کاربر"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "نام",
						v: user?.fullName ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "نقش",
						v: user?.role ?? "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "موبایل",
						v: user?.mobile ?? "—",
						ltr: true
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Surface, {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-3 font-semibold text-navy",
						children: "پلن‌ها"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plan, {
								name: "آزاد",
								items: [
									"تا ۲۰ پرونده",
									"مواعد پایه",
									"یک کاربر"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plan, {
								name: "حرفه‌ای",
								items: [
									"پرونده نامحدود",
									"وجوه امانی",
									"ویرایشگر لایحه"
								],
								current: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plan, {
								name: "اولترا",
								items: [
									"پورتال موکل",
									"تحلیل ریسک",
									"همگام‌سازی ابری"
								]
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-sm text-muted",
			children: "داده‌های این نسخه روی همین دستگاه ذخیره می‌شود. پیامک واقعی، حساب بانکی و همگام‌سازی ابری در نسخه سازمانی فعال می‌شود."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: resetDemo,
			className: "mt-4 h-11 rounded-md border border-line px-4 text-sm",
			children: "بازنشانی داده‌های نمایشی"
		})
	] });
}
function Row({ k, v, ltr }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between border-b border-line py-2.5 text-sm last:border-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium",
			dir: ltr ? "ltr" : "rtl",
			children: v
		})]
	});
}
function Plan({ name, items, current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `rounded-lg border p-4 ${current ? "border-navy bg-paper" : "border-line"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-semibold text-navy",
			children: name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-2 space-y-1 text-sm text-muted",
			children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: i }, i))
		})]
	});
}
//#endregion
export { SettingsPage as component };
