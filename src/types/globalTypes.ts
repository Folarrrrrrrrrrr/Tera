// Auth interfaces begins here

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
  }
  
  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
  }
  
  export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
  }

  export interface SidebarItemProps {
    icon: string;
    text: string;
    active?: boolean;
  }
  export type optionType = { value: string; label: string };
