const firstLetterCaptalize = (input: string): string => {
    return input.length ? input.charAt(0).toUpperCase() + input.slice(1) : input;
}