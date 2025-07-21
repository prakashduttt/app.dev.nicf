export function confirmPassword(control) {
    const confirmPassword = control.value;
    const password = control.root.get('nextPassword')
        ? control.root.get('nextPassword')?.value
        : control.root.get('password')?.value;
    if (password !== confirmPassword) {
        return { passwordMatch: true };
    }
    else {
        return null;
    }
}
//# sourceMappingURL=confirm-password.validator.js.map