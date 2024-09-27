export interface WorkExperienceModel {
  icon: any;
  company: string;
  country: string;
  type: 'contract' | 'full-time' | 'part-time freelance' | 'freelance' | 'contract remote' | string;
  positions: WorkPositionModel[];
  hideInResume?: boolean;
}

export interface WorkPositionModel {
  title: string;
  start: YearMonth;
  end?: YearMonth;
  desc: string;
}

export interface EducationModel {
  icon: any;
  name: string;
  country: string;
  degree: string;
  start: YearMonth;
  end?: YearMonth;
  desc: string;
  hideInResume?: boolean;
}
export interface YearMonth {
  month: string;
  year: string;
}
