import {screen, render } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header', () => {
    it('renders a login link', () => {
        render(<Header />);
        const logInText = screen.getByText('Log in');
        expect(logInText).toBeInTheDocument();
    });
    it("renders a login link", () => {
      render(<Header />);
      const sigUpText = screen.getByText("Try for free");
      expect(sigUpText).toBeInTheDocument();
    });
    it('renders all nav links', () => {
        render(<Header />);
        const navLinks = screen.getAllByRole('link');
        expect(navLinks).toHaveLength(8);
    });
    }
);