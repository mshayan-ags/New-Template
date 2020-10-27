import AcademyAppConfig from './academy/AcademyAppConfig';
import CalendarAppConfig from './calendar/CalendarAppConfig';
import ChatAppConfig from './chat/ChatAppConfig';
import ContactsAppConfig from './contacts/ContactsAppConfig';
import AnalyticsDashboardAppConfig from './dashboards/analytics/AnalyticsDashboardAppConfig';
import ProjectDashboardAppConfig from './dashboards/project/ProjectDashboardAppConfig';
import ECommerceAppConfig from './e-commerce/ECommerceAppConfig';
import FileManagerAppConfig from './file-manager/FileManagerAppConfig';
import MailAppConfig from './mail/MailAppConfig';
import NotesAppConfig from './notes/NotesAppConfig';
import ScrumboardAppConfig from './scrumboard/ScrumboardAppConfig';
import TodoAppConfig from './todo/TodoAppConfig';
import Dashboard from "./Apps/dashboards/project/ProjectDashboardAppConfig"
import Admin from "./Apps/e-commerce/ECommerceAppConfig"
import MainUI from "./Apps/MainUI/FileManagerAppConfig"
import FileManager from "./Apps/file-manager/FileManagerAppConfig"

const appsConfigs = [
	// AnalyticsDashboardAppConfig,
	// ProjectDashboardAppConfig,
	// MailAppConfig,
	// TodoAppConfig,
	// FileManagerAppConfig,
	// ContactsAppConfig,
	// CalendarAppConfig,
	// ChatAppConfig,
	// ECommerceAppConfig,
	// ScrumboardAppConfig,
	// AcademyAppConfig,
	// NotesAppConfig
	Dashboard,
	Admin,
	MainUI,
	FileManager
];

export default appsConfigs;
