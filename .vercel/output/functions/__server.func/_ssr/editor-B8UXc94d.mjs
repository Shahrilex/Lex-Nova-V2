import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Route$12 } from "./router-CXBV8Z2z.mjs";
import { c as useApp } from "./store-D2eEpdmy.mjs";
import { t as AppShell } from "./AppShell-BWDf7iIu.mjs";
import { t as PageHeader } from "./PageHeader-COnGV0eU.mjs";
import { n as generateDraft, t as draftPetition } from "./generate-draft-DnNdQ9JQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/editor-B8UXc94d.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function EditorPage() {
	const search = Route$12.useSearch();
	const cases = useApp((s) => s.cases);
	const clients = useApp((s) => s.clients);
	const petitions = useApp((s) => s.petitions);
	const savePetition = useApp((s) => s.savePetition);
	const [caseId, setCaseId] = (0, import_react.useState)(search.caseId ?? cases[0]?.id ?? "");
	const [kind, setKind] = (0, import_react.useState)("petition");
	const [title, setTitle] = (0, import_react.useState)("دادخواست");
	const [body, setBody] = (0, import_react.useState)("");
	const [saved, setSaved] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [hint, setHint] = (0, import_react.useState)("");
	const caseItem = cases.find((c) => c.id === caseId);
	const client = clients.find((c) => c.id === caseItem?.clientId);
	const related = (0, import_react.useMemo)(() => petitions.filter((p) => !caseId || p.caseId === caseId), [petitions, caseId]);
	const titles = {
		appeal: "لایحه تجدیدنظرخواهی",
		defense: "لایحه دفاعیه",
		expert: "اعتراض به نظریه کارشناسی",
		execution: "درخواست اجرای حکم",
		settlement: "لایحه سازش",
		petition: "دادخواست"
	};
	const generate = async () => {
		setBusy(true);
		setHint("");
		setTitle(titles[kind] ?? "دادخواست");
		const facts = [
			`موکل: ${client?.fullName ?? "نامشخص"}`,
			`موضوع: ${caseItem?.title ?? ""}`,
			`مرجع: ${caseItem?.court ?? ""} ${caseItem?.branch ?? ""}`,
			`کلاسه: ${caseItem?.caseNumber ?? "—"}`,
			`خواسته: ${caseItem?.claimAmount ?? ""}`,
			`شرح: ${caseItem?.description ?? ""}`
		].join("\n");
		try {
			const res = await generateDraft({ data: {
				kind,
				facts
			} });
			if (res.ok) {
				setBody(res.text);
				setHint("متن با مدل هوشمند تولید شد؛ پیش از تقدیم بازبینی کنید.");
			} else {
				setBody(draftPetition(kind, caseItem, client));
				setHint("الگوی حقوقی دفتر اعمال شد (اتصال مدل در این محیط در دسترس نبود).");
			}
		} catch {
			setBody(draftPetition(kind, caseItem, client));
			setHint("الگوی حقوقی دفتر اعمال شد.");
		} finally {
			setBusy(false);
		}
	};
	const save = () => {
		const id = savePetition({
			caseId,
			title,
			body
		});
		setSaved(id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "ویرایشگر لایحه",
		subtitle: "پیش‌نویس اوراق قضایی با استناد به مواد قانونی"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-5 lg:grid-cols-[minmax(0,1fr)_16rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3 rounded-xl border border-line bg-surface p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-medium",
						children: ["پرونده", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: caseId,
							onChange: (e) => setCaseId(e.target.value),
							className: "mt-1 h-11 w-full rounded-md border border-line bg-paper px-3 text-sm",
							children: cases.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c.id,
								children: c.title
							}, c.id))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-medium",
						children: ["نوع سند", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: kind,
							onChange: (e) => setKind(e.target.value),
							className: "mt-1 h-11 w-full rounded-md border border-line bg-paper px-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "petition",
									children: "دادخواست"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "defense",
									children: "لایحه دفاعیه"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "appeal",
									children: "تجدیدنظرخواهی"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "expert",
									children: "اعتراض کارشناسی"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "execution",
									children: "اجرای حکم"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "settlement",
									children: "سازش"
								})
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: title,
					onChange: (e) => setTitle(e.target.value),
					className: "h-11 w-full rounded-md border border-line bg-paper px-3 text-sm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					value: body,
					onChange: (e) => setBody(e.target.value),
					className: "min-h-80 w-full rounded-md border border-line bg-paper p-3 text-sm leading-7 outline-none focus:border-navy",
					placeholder: "متن لایحه را بنویسید یا از تولید هوشمند استفاده کنید..."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: generate,
						disabled: busy,
						className: "h-11 rounded-md bg-navy px-4 text-sm font-medium text-paper disabled:opacity-60",
						children: busy ? "در حال نگارش..." : "تولید پیش‌نویس هوشمند"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: save,
						className: "h-11 rounded-md border border-line px-4 text-sm",
						children: "ذخیره در پرونده"
					})]
				}),
				hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: hint
				}),
				saved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-ok",
					children: "پیش‌نویس ذخیره شد."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "این پیشنهاد جایگزین نظر وکیل نیست و باید پیش از تقدیم بازبینی شود."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "rounded-xl border border-line bg-surface p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 text-sm font-semibold text-navy",
				children: "پیش‌نویس‌های پرونده"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => {
						setTitle(p.title);
						setBody(p.body);
						setCaseId(p.caseId);
					},
					className: "block w-full rounded-md border border-line p-3 text-right text-sm hover:bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: p.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: p.updatedAt
					})]
				}, p.id)), related.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "هنوز پیش‌نویسی نیست."
				})]
			})]
		})]
	})] });
}
//#endregion
export { EditorPage as component };
