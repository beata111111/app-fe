export interface PopupDialogConfig {
  title?: string;
  showBackButton?: boolean;
  backButtonText?: string;
  showNextButton?: boolean;
  nextButtonText?: string;
}

export const defaultPopupDialogConfig: PopupDialogConfig = {
  title: "",
  showBackButton: true,
  backButtonText: "back",
  showNextButton: true,
  nextButtonText: "next",
};
