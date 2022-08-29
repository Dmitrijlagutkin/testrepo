import AdministratorPage from '../../pages/claimsAdmin/administratorPage';
import ExtractParameters from '../../pages/claimsAdmin/administratorPage/tabs/ExtractParameters';
import FileLayout from '../../pages/claimsAdmin/administratorPage/tabs/FileLayout';
import ListOfValues from '../../pages/claimsAdmin/administratorPage/tabs/ListOfValues';
import MappingDefined from '../../pages/claimsAdmin/administratorPage/tabs/MappingDefined';
import ExtractRoster from '../../pages/claimsAnalyst/extractRoster';
import MyPreferences from '../../pages/claimsAnalyst/myPreferences';
import NewExtract from '../../pages/claimsAnalyst/newExtract';
import SheduleRoster from '../../pages/claimsAnalyst/sheduleRoster';
import TransmissionHistory from '../../pages/claimsAnalyst/transmissionHistory';

export const tabs = {
  claimAnalyst: [
    {
      title: 'NewExtract',
      pageTitle: (
        <div className="tab-title-container">
          <h3 className="tab-title">NewExtract</h3>
          <span>Printable View | PDF View</span>
        </div>
      ),
      component: NewExtract,
    },
    { title: 'extractRoster', component: ExtractRoster },
    { title: 'SheduleRoster', component: SheduleRoster },
    {
      title: 'MyPreferences',
      pageTitle: (
        <div className="tab-title-container">
          <h3 className="tab-title">NewExtract</h3>
          <span>Printable View | PDF View</span>
        </div>
      ),
      component: MyPreferences,
    },
    { title: 'TransmissionHistory', component: TransmissionHistory },
  ],
  enrollmentAnalyst: [
    {
      title: 'NewExtract',
      pageTitle: (
        <div className="tab-title-container">
          <h3 className="tab-title">NewExtract</h3>
          <span>Printable View | PDF View</span>
        </div>
      ),
      component: NewExtract,
    },
    { title: 'extractRoster', component: ExtractRoster },
    { title: 'SheduleRoster', component: SheduleRoster },
    {
      title: 'MyPreferences',
      pageTitle: (
        <div className="tab-title-container">
          <h3 className="tab-title">NewExtract</h3>
          <span>Printable View | PDF View</span>
        </div>
      ),
      component: MyPreferences,
    },
  ],
  claimsAdmin: [
    {
      title: 'NewExtract',
      pageTitle: (
        <div className="tab-title-container">
          <h3 className="tab-title">NewExtract</h3>
          <span>Printable View | PDF View</span>
        </div>
      ),
      component: NewExtract,
    },
    { title: 'extractRoster', component: ExtractRoster },
    { title: 'SheduleRoster', component: SheduleRoster },
    {
      title: 'MyPreferences',
      pageTitle: (
        <div className="tab-title-container">
          <h3 className="tab-title">NewExtract</h3>
          <span>Printable View | PDF View</span>
        </div>
      ),
      component: MyPreferences,
    },
    { title: 'TransmissionHistory', component: TransmissionHistory },
    {
      title: 'Administrator Page',
      component: AdministratorPage,
      subTabs: [
        {
          title: 'Extract Parameters Definition',
          pageTitle: (
            <div className="tab-title-container justify-content-between">
              <h3 className="tab-title">Extract Parameters Definition</h3>
              <div className="nav">Printable view</div>
            </div>
          ),
          component: ExtractParameters,
        },
        {
          title: 'Mapping Defined Extract Parameters',
          pageTitle: (
            <div className="tab-title-container justify-content-between">
              <h3 className="tab-title">Mapping Defined Extract Parameters</h3>
              <div className="nav">Printable view</div>
            </div>
          ),
          component: MappingDefined,
        },
        { title: 'List of Values mapping', component: ListOfValues },
        {
          title: 'File Layout Parameters Definition',
          component: FileLayout,
        },
      ],
    },
  ],
};
