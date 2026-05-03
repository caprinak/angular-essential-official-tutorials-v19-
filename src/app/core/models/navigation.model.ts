/** Navigation item used in the sidebar. */
export interface NavItem {
  label: string;
  icon?: string;
  route: string;
  children?: NavItem[];
}

/** Tutorial category definition. */
export interface TutorialCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  steps: TutorialStep[];
}

/** A single step within a tutorial. */
export interface TutorialStep {
  id: string;
  title: string;
  route: string;
  description?: string;
}
