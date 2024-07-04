export const showPic = (name) => {
    return new URL(`../assets/img/${name}.png`, import.meta.url).href;
}
export const showIcon = (name) => {
    return new URL(`../assets/icon/${name}.png`, import.meta.url).href;
}