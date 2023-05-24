import { AppThemeProvider } from './ThemeProvider';
/**
 * Define Provider For Whole Project
 */
interface Props {
  children: React.ReactNode;
}
export const Provider = ({ children }: Props) => {
  return (
    <AppThemeProvider>
      {children}
    </AppThemeProvider>
  );
};
