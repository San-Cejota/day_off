export type RootStackParamList = {
  Welcome: undefined; 
  Login: undefined;
  Register: undefined;
  crear: undefined;
  Home:  { screen?: keyof TabsParamList } | undefined;
  JobDetail: { job: Job };
};

export type TabsParamList = {
  Jobs: undefined;
  CreateJob: undefined;
  Profile: undefined;
};
export type Job = {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
};

