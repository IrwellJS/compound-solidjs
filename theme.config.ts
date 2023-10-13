import {ThemeConfig} from 'tailwindcss/types/config';
import colors from 'tailwindcss/colors';

export const theme: Partial<ThemeConfig> = {
    colors: {
        primary: {
            DEFAULT: colors.indigo[800],
            dark: colors.blue[900],
            light: colors.blue[700],
        }
    }
}
