import { i as head, n as derived, r as ensure_array_like, t as attr_class, v as attr, y as escape_html } from "../../chunks/server.js";
import { format, getWeek } from "date-fns";
//#region src/lib/components/Date.svelte
function Date_1($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let date = /* @__PURE__ */ new Date();
		let week = derived(() => getWeek(date));
		let time = derived(() => format(date, "HH:mm:ss"));
		let ddate = derived(() => format(date, "MMM dd"));
		$$renderer.push(`<div class="flex flex-col items-center gap-2"><div class="font-mono text-5xl font-light tracking-tight">${escape_html(time())}</div> <div class="flex items-center gap-3 font-mono text-base muted"><span>${escape_html(ddate())}</span> <span class="muted">-</span> <span>week ${escape_html(week())}</span></div></div>`);
	});
}
//#endregion
//#region src/lib/constants.ts
var searchEngines = [
	{
		id: "duckduckgo",
		title: "DuckDuckGo",
		searchUrl: "https://duckduckgo.com/?q="
	},
	{
		id: "google",
		title: "Google",
		searchUrl: "https://google.com/search?q="
	},
	{
		id: "bing",
		title: "Bing",
		searchUrl: "https://bing.com/search?q="
	}
];
var shortcuts = [
	{
		title: "Proton Mail",
		url: "https://mail.proton.me/u/3/inbox",
		key: "1"
	},
	{
		title: "YouTube",
		url: "https://youtube.com",
		key: "2"
	},
	{
		title: "reddit",
		url: "https://reddit.com",
		key: "3"
	},
	{
		title: "GitHub",
		url: "https://github.com",
		key: "4"
	},
	{
		title: "Hacker News",
		url: "https://news.ycombinator.com",
		key: "5"
	},
	{
		title: "NRK",
		url: "https://nrk.no",
		key: "6"
	},
	{
		title: "The Economist",
		url: "https://economist.com",
		key: "7"
	},
	{
		title: "VG",
		url: "https://vg.no",
		key: "8"
	},
	{
		title: "FIFA Fantasy",
		url: "https://play.fifa.com/fantasy/team",
		key: "9"
	}
];
//#endregion
//#region src/lib/components/Search.svelte
function Search($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let searchQuery = "";
		let selectedEngine = "duckduckgo";
		$$renderer.push(`<form class="space-y-2"><div class="flex"><input${attr("value", searchQuery)} type="search" name="q" autocomplete="off" style="border-color: var(--border);" class="flex-1 border-b bg-transparent py-3 text-base focus:outline-none" placeholder="Search"/></div> <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm"><!--[-->`);
		const each_array = ensure_array_like(searchEngines);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let engine = each_array[$$index];
			$$renderer.push(`<button type="button"${attr_class(`cursor-pointer focus:outline-none focus:underline ${selectedEngine === engine.id ? "active-text" : "muted"}`)}>${escape_html(engine.title)}</button>`);
		}
		$$renderer.push(`<!--]--></div></form>`);
	});
}
//#endregion
//#region src/lib/components/Shortcuts.svelte
function Shortcuts($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<ul class="grid grid-cols-2 gap-x-6 gap-y-2 text-base sm:grid-cols-3"><!--[-->`);
		const each_array = ensure_array_like(shortcuts);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let shortcut = each_array[$$index];
			$$renderer.push(`<li class="flex items-center gap-2"><span class="font-mono text-xs muted">${escape_html(shortcut.key)}</span> <a${attr("href", shortcut.url)} class="muted hover-text focus-text focus:outline-none">${escape_html(shortcut.title)}</a></li>`);
		}
		$$renderer.push(`<!--]--></ul>`);
	});
}
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer) {
	head("1uha8ag", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>omfj | Start</title>`);
		});
	});
	$$renderer.push(`<main class="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-10 px-8 py-12">`);
	Date_1($$renderer, {});
	$$renderer.push(`<!----> `);
	Search($$renderer, {});
	$$renderer.push(`<!----> `);
	Shortcuts($$renderer, {});
	$$renderer.push(`<!----></main>`);
}
//#endregion
export { _page as default };
