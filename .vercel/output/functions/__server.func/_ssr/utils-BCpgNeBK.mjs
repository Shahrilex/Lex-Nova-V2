import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-BCpgNeBK.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid() {
	return crypto.randomUUID();
}
function fromFaDigits(value) {
	const fa = "۰۱۲۳۴۵۶۷۸۹";
	const ar = "٠١٢٣٤٥٦٧٨٩";
	return value.replace(/[۰-۹٠-٩]/g, (d) => {
		const i = fa.indexOf(d);
		if (i >= 0) return String(i);
		const j = ar.indexOf(d);
		return j >= 0 ? String(j) : d;
	});
}
function toFaDigits(value) {
	const map = [
		"۰",
		"۱",
		"۲",
		"۳",
		"۴",
		"۵",
		"۶",
		"۷",
		"۸",
		"۹"
	];
	return String(value).replace(/\d/g, (d) => map[Number(d)] ?? d);
}
function todayJalali() {
	try {
		return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit"
		}).format(/* @__PURE__ */ new Date());
	} catch {
		return "۱۴۰۵/۰۷/۰۵";
	}
}
function nowTime() {
	try {
		return new Intl.DateTimeFormat("fa-IR", {
			hour: "2-digit",
			minute: "2-digit"
		}).format(/* @__PURE__ */ new Date());
	} catch {
		return "۱۲:۰۰";
	}
}
function isIranMobile(value) {
	return /^09\d{9}$/.test(value.replace(/\D/g, ""));
}
function money(n) {
	return `${toFaDigits(Math.round(n).toLocaleString("en-US"))} ریال`;
}
//#endregion
export { nowTime as a, uid as c, money as i, fromFaDigits as n, toFaDigits as o, isIranMobile as r, todayJalali as s, cn as t };
