export const appostraphe = "`";
appostraphe.replace(/&([a-z]{1,4});/gi, match => new DOMParser().parseFromString(match, "text/html").documentElement.textContent)