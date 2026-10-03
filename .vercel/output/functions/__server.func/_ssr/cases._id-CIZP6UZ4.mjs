import { i as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as money } from "./utils-BCpgNeBK.mjs";
import { i as Route$3 } from "./router-CXBV8Z2z.mjs";
import { c as useApp, i as partyRoleLabel, s as txLabel, t as caseTypeLabel } from "./store-D2eEpdmy.mjs";
import { t as AppShell } from "./AppShell-BWDf7iIu.mjs";
import { n as StatusBadge, t as DeadlineBadge } from "./Badges-kjZB7AdA.mjs";
import { n as generateDraft, t as draftPetition } from "./generate-draft-DnNdQ9JQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases._id-CIZP6UZ4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CaseDetail() {
	const { id } = Route$3.useParams();
	const caseItem = useApp((s) => s.cases.find((c) => c.id === id));
	const client = useApp((s) => s.clients.find((c) => c.id === caseItem?.clientId));
	const deadlines = useApp((s) => s.deadlines.filter((d) => d.caseId === id));
	const timeline = useApp((s) => s.timeline.filter((t) => t.caseId === id));
	const documents = useApp((s) => s.documents.filter((d) => d.caseId === id));
	const notes = useApp((s) => s.notes.filter((n) => n.caseId === id));
	const parties = useApp((s) => s.parties.filter((p) => p.caseId === id));
	const txs = useApp((s) => s.transactions.filter((t) => t.caseId === id));
	const hearings = useApp((s) => s.hearings.filter((h) => h.caseId === id));
	const addNote = useApp((s) => s.addNote);
	const addTimeline = useApp((s) => s.addTimeline);
	const addDocument = useApp((s) => s.addDocument);
	const addDeadline = useApp((s) => s.addDeadline);
	const toggleDeadline = useApp((s) => s.toggleDeadline);
	const addParty = useApp((s) => s.addParty);
	const addTransaction = useApp((s) => s.addTransaction);
	const savePetition = useApp((s) => s.savePetition);
	const [tab, setTab] = (0, import_react.useState)("summary");
	const [note, setNote] = (0, import_react.useState)("");
	const [action, setAction] = (0, import_react.useState)("");
	const [docTitle, setDocTitle] = (0, import_react.useState)("");
	const [dlTitle, setDlTitle] = (0, import_react.useState)("");
	const [dlDate, setDlDate] = (0, import_react.useState)("");
	const [pName, setPName] = (0, import_react.useState)("");
	const [pCode, setPCode] = (0, import_react.useState)("");
	const [pRole, setPRole] = (0, import_react.useState)("opponent");
	const [draft, setDraft] = (0, import_react.useState)("");
	const [aiBusy, setAiBusy] = (0, import_react.useState)(false);
	const [aiHint, setAiHint] = (0, import_react.useState)("");
	if (!caseItem) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-muted",
		children: "پرونده یافت نشد."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/cases",
		className: "text-sm text-brass",
		children: "بازگشت"
	})] });
	const tabs = [
		{
			id: "summary",
			label: "خلاصه"
		},
		{
			id: "parties",
			label: "طرفین"
		},
		{
			id: "timeline",
			label: "تایم‌لاین"
		},
		{
			id: "docs",
			label: "اسناد"
		},
		{
			id: "deadlines",
			label: "مواعد"
		},
		{
			id: "finance",
			label: "مالی"
		},
		{
			id: "notes",
			label: "یادداشت"
		},
		{
			id: "ai",
			label: "هوش مصنوعی"
		}
	];
	const claim = Number(caseItem.claimAmount) || 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/cases",
			className: "mb-3 inline-block text-sm text-muted hover:text-navy",
			children: "بازگشت به پرونده‌ها"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex flex-wrap items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold text-navy",
					children: caseItem.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: caseItem.status })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					caseItem.caseNumber || "بدون کلاسه",
					" · ",
					caseItem.court || "—",
					" ",
					caseItem.branch && `· ${caseItem.branch}`,
					" ·",
					" ",
					caseTypeLabel[caseItem.caseType]
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/assistant",
					search: {
						caseId: caseItem.id,
						q: `پرونده «${caseItem.title}» را خلاصه کن و ریسک مواعد را بگو.`
					},
					className: "inline-flex h-11 items-center rounded-md border border-line px-4 text-sm",
					children: "پرسش از دستیار"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/editor",
					search: { caseId: caseItem.id },
					className: "inline-flex h-11 items-center rounded-md bg-navy px-4 text-sm font-medium text-paper",
					children: "نوشتن لایحه"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 flex flex-wrap gap-1 overflow-x-auto border-b border-line",
			children: tabs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setTab(t.id),
				className: `h-11 shrink-0 px-4 text-sm ${tab === t.id ? "border-b-2 border-navy font-medium text-navy" : "text-muted"}`,
				children: t.label
			}, t.id))
		}),
		tab === "summary" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						client ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/clients/$id",
							params: { id: client.id },
							className: "rounded-xl border border-line bg-surface p-4 hover:border-navy/30",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "موکل"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-medium",
								children: client.fullName
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							label: "موکل",
							value: "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							label: "تاریخ تشکیل",
							value: caseItem.openedAt
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							label: "خواسته",
							value: claim ? money(claim) : "غیرمالی / نامشخص"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							label: "مواعد باز",
							value: String(deadlines.filter((d) => !d.isCompleted).length)
						})
					]
				}),
				caseItem.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-xl border border-line bg-surface p-4 text-sm leading-7",
					children: caseItem.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-surface p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mb-2 text-sm font-semibold text-navy",
								children: "جلسات"
							}),
							hearings.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "جلسه‌ای ثبت نشده."
							}),
							hearings.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [
									h.date,
									" · ",
									h.time,
									" — ",
									h.subject
								]
							}, h.id))
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-line bg-surface p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-2 text-sm font-semibold text-navy",
							children: "طرفین"
						}), parties.slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm",
							children: [
								p.fullName,
								" · ",
								partyRoleLabel[p.role]
							]
						}, p.id))]
					})]
				})
			]
		}),
		tab === "parties" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mb-4 grid gap-2 sm:grid-cols-[1fr_8rem_10rem_auto]",
			onSubmit: (e) => {
				e.preventDefault();
				if (!pName.trim()) return;
				addParty({
					caseId: id,
					fullName: pName,
					nationalCode: pCode,
					role: pRole,
					notes: ""
				});
				setPName("");
				setPCode("");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: pName,
					onChange: (e) => setPName(e.target.value),
					placeholder: "نام",
					className: "h-11 rounded-md border border-line bg-surface px-3 text-sm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					dir: "ltr",
					value: pCode,
					onChange: (e) => setPCode(e.target.value),
					placeholder: "کد ملی",
					className: "h-11 rounded-md border border-line bg-surface px-3 text-sm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: pRole,
					onChange: (e) => setPRole(e.target.value),
					className: "h-11 rounded-md border border-line bg-surface px-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "client_side",
							children: "طرف موکل"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "opponent",
							children: "طرف مقابل"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "third",
							children: "ثالث"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "opp_counsel",
							children: "وکیل مقابل"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "h-11 rounded-md bg-navy px-4 text-sm text-paper",
					children: "افزودن"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: parties.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap justify-between gap-2 rounded-xl border border-line bg-surface px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: p.fullName
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					dir: "ltr",
					children: p.nationalCode || "—"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted",
					children: partyRoleLabel[p.role]
				})]
			}, p.id))
		})] }),
		tab === "timeline" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex flex-col gap-2 sm:flex-row",
					onSubmit: (e) => {
						e.preventDefault();
						if (!action.trim()) return;
						addTimeline(id, action, "", "action");
						setAction("");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: action,
						onChange: (e) => setAction(e.target.value),
						placeholder: "ثبت اقدام جدید",
						className: "h-11 flex-1 rounded-md border border-line bg-surface px-3 text-sm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "h-11 rounded-md bg-navy px-4 text-sm text-paper",
						children: "ثبت"
					})]
				}),
				timeline.map((ev, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1 size-2.5 rounded-full bg-brass" }), i < timeline.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px flex-1 bg-line" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted",
								children: [
									ev.date,
									" · ",
									ev.time
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: ev.title
							}),
							ev.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: ev.description
							})
						]
					})]
				}, ev.id)),
				timeline.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "اقدامی ثبت نشده."
				})
			]
		}),
		tab === "docs" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mb-4 flex flex-col gap-2 sm:flex-row",
			onSubmit: (e) => {
				e.preventDefault();
				if (!docTitle.trim()) return;
				addDocument(id, docTitle, "سند");
				setDocTitle("");
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: docTitle,
				onChange: (e) => setDocTitle(e.target.value),
				placeholder: "عنوان سند",
				className: "h-11 flex-1 rounded-md border border-line bg-surface px-3 text-sm"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "h-11 rounded-md bg-navy px-4 text-sm text-paper",
				children: "افزودن"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [documents.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between rounded-md border border-line bg-surface px-4 py-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted",
					children: [
						d.kind,
						" · ",
						d.createdAt
					]
				})]
			}, d.id)), documents.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "سندی نیست."
			})]
		})] }),
		tab === "deadlines" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mb-4 grid gap-2 sm:grid-cols-[1fr_10rem_auto]",
			onSubmit: (e) => {
				e.preventDefault();
				if (!dlTitle.trim() || !dlDate.trim()) return;
				addDeadline({
					title: dlTitle,
					caseId: id,
					dueDate: dlDate,
					type: "internal",
					isUrgent: false,
					legalArticle: "",
					ruleCode: "CUSTOM"
				});
				setDlTitle("");
				setDlDate("");
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: dlTitle,
					onChange: (e) => setDlTitle(e.target.value),
					placeholder: "عنوان موعد",
					className: "h-11 rounded-md border border-line bg-surface px-3 text-sm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: dlDate,
					onChange: (e) => setDlDate(e.target.value),
					placeholder: "۱۴۰۵/۰۸/۰۱",
					className: "h-11 rounded-md border border-line bg-surface px-3 text-sm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "h-11 rounded-md bg-navy px-4 text-sm text-paper",
					children: "افزودن"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: deadlines.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => toggleDeadline(d.id),
				className: "flex w-full items-start justify-between rounded-md border border-line bg-surface p-4 text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: d.isCompleted ? "text-muted line-through" : "font-medium",
						children: d.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: d.legalArticle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeadlineBadge, { type: d.type })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: d.isUrgent && !d.isCompleted ? "text-sm text-danger" : "text-sm text-muted",
					children: d.dueDate
				})]
			}, d.id))
		})] }),
		tab === "finance" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "h-11 rounded-md border border-line px-4 text-sm",
					onClick: () => addTransaction({
						caseId: id,
						type: "income",
						amount: 1e7,
						description: "ثبت دستی حق‌الوکاله",
						date: caseItem.openedAt,
						isTrust: false
					}),
					children: "ثبت ۱۰ میلیون ریال حق‌الوکاله نمونه"
				}),
				txs.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between rounded-md border border-line bg-surface px-4 py-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						txLabel[t.type],
						" · ",
						t.description
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: money(t.amount)
					})]
				}, t.id)),
				txs.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "تراکنشی نیست."
				})
			]
		}),
		tab === "notes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mb-4 space-y-2",
			onSubmit: (e) => {
				e.preventDefault();
				if (!note.trim()) return;
				addNote(id, note);
				setNote("");
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: note,
				onChange: (e) => setNote(e.target.value),
				className: "min-h-24 w-full rounded-md border border-line bg-surface px-3 py-2 text-sm",
				placeholder: "یادداشت داخلی"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "h-11 rounded-md bg-navy px-4 text-sm text-paper",
				children: "ذخیره یادداشت"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-2",
			children: notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-line bg-surface p-4 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: n.createdAt
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: n.body
				})]
			}, n.id))
		})] }),
		tab === "ai" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "پیش‌نویس بر اساس همین پرونده. متن باید پیش از تقدیم بازبینی شود."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [[
						["petition", "دادخواست"],
						["defense", "دفاعیه"],
						["appeal", "تجدیدنظر"]
					].map(([kind, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: aiBusy,
						className: kind === "petition" ? "h-11 rounded-md bg-navy px-4 text-sm text-paper disabled:opacity-60" : "h-11 rounded-md border border-line px-4 text-sm disabled:opacity-60",
						onClick: async () => {
							setAiBusy(true);
							setAiHint("");
							const facts = [
								`موکل: ${client?.fullName ?? "نامشخص"}`,
								`موضوع: ${caseItem.title}`,
								`مرجع: ${caseItem.court} ${caseItem.branch}`,
								`کلاسه: ${caseItem.caseNumber || "—"}`,
								`خواسته: ${caseItem.claimAmount}`,
								`شرح: ${caseItem.description}`
							].join("\n");
							try {
								const res = await generateDraft({ data: {
									kind,
									facts
								} });
								if (res.ok) {
									setDraft(res.text);
									setAiHint("متن با مدل هوشمند تولید شد.");
								} else {
									setDraft(draftPetition(kind, caseItem, client));
									setAiHint("الگوی حقوقی دفتر اعمال شد.");
								}
							} catch {
								setDraft(draftPetition(kind, caseItem, client));
								setAiHint("الگوی حقوقی دفتر اعمال شد.");
							} finally {
								setAiBusy(false);
							}
						},
						children: aiBusy ? "در حال نگارش..." : label
					}, kind)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/assistant",
						search: {
							caseId: id,
							q: `برای پرونده «${caseItem.title}» راهبرد لایحه دفاعیه پیشنهاد بده.`
						},
						className: "inline-flex h-11 items-center rounded-md border border-line px-4 text-sm",
						children: "گفتگو با دستیار"
					})]
				}),
				aiHint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: aiHint
				}),
				draft && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
					className: "whitespace-pre-wrap rounded-xl border border-line bg-surface p-4 text-sm leading-7",
					children: draft
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "h-11 rounded-md bg-navy px-4 text-sm text-paper",
					onClick: () => {
						savePetition({
							caseId: id,
							title: "پیش‌نویس هوشمند",
							body: draft
						});
					},
					children: "ذخیره در پرونده"
				})] })
			]
		})
	] });
}
function Mini({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-surface p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-medium",
			children: value
		})]
	});
}
//#endregion
export { CaseDetail as component };
