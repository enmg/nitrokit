import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

/**
 * Custom hook to manage the application's theme using `next-themes`.
 * It provides a way to determine if the dark theme is active and
 * a function to change the theme, while also handling component mounting
 * to prevent hydration mismatches.
 *
 * @returns A tuple containing:
 *  - `isDark` (boolean): `true` if the current resolved theme is 'dark' and the component is mounted, `false` otherwise.
 *  - `mounted` (boolean): `true` if the component has mounted, `false` otherwise. This is useful to avoid rendering theme-dependent UI before hydration.
 *  - `setTheme` (function): A function from `next-themes` to change the current theme. It accepts a string (e.g., 'light', 'dark', 'system').
 */

export default function useNextTheme() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Return current theme (not resolved for system preference)
    return [theme || 'system', mounted, setTheme] as const;
}
