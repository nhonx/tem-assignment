class DisplayCondition {
  id: string;
  comparatorId: string;
  comparator: "EQUALS" | "NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS";
  comparisonValue: string;

  constructor(
    _id: string,
    _comparatorId: string,
    _comparator: "EQUALS" | "NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS",
    _comparisonValue: string
  ) {
    this.id = _id;
    this.comparatorId = _comparatorId;
    this.comparator = _comparator;
    this.comparisonValue = _comparisonValue;
  }
}

class FormComponentSubmission {
  fileUploads: string[];
  selectedResponses: string[];
  rating: number;
  response: string;
  userId: string;
  rows: TableSubmissionRow[];
  number: number;
  date: string;
  reportTemplateId: string;
  tableResponse: TableResponseCell[];

  constructor(
    _fileUploads: string[],
    _selectedResponses: string[],
    _rating: number,
    _response: string,
    _userId: string,
    _rows: TableSubmissionRow[],
    _number: number,
    _date: string,
    _reportTemplateId: string,
    _tableResponse: TableResponseCell[]
  ) {
    this.fileUploads = _fileUploads;
    this.selectedResponses = _selectedResponses;
    this.rating = _rating;
    this.response = _response;
    this.userId = _userId;
    this.rows = _rows;
    this.number = _number;
    this.date = _date;
    this.reportTemplateId = _reportTemplateId;
    this.tableResponse = _tableResponse;
  }
}

class FormItem {
  type:
    | "FILE_UPLOAD"
    | "FILE_DOWNLOAD"
    | "SINGLE_RESPONSE"
    | "MULTI_RESPONSE"
    | "DROPDOWN_LIST"
    | "MULTI_DROPDOWN_LIST"
    | "RATING"
    | "TEXT"
    | "SHORT_TEXT"
    | "FOUNDATION_USER"
    | "TABLE"
    | "NUMBER"
    | "DATE"
    | "BUDGET_CATEGORY"
    | "REPORT_TEMPLATE"
    | "YES_NO_CHECKBOX"
    | "ORG_LEGAL_NAME"
    | "ORG_DBA"
    | "ORG_LEGAL_STATUS"
    | "ORG_EIN"
    | "ORG_HQ"
    | "ORG_HQ_ADDRESS_1"
    | "ORG_HQ_ADDRESS_2"
    | "ORG_HQ_CITY"
    | "ORG_HQ_STATE"
    | "ORG_HQ_ZIPCODE"
    | "ORG_HQ_COUNTRY"
    | "ORG_MAILING_ADDR"
    | "ORG_MAILING_ADDRESS_1"
    | "ORG_MAILING_ADDRESS_2"
    | "ORG_MAILING_CITY"
    | "ORG_MAILING_STATE"
    | "ORG_MAILING_ZIPCODE"
    | "ORG_MAILING_COUNTRY"
    | "ORG_PHONE_NUMBER"
    | "ORG_EMAIL"
    | "ORG_WEBSITE"
    | "ORG_FISCAL_SPONSOR"
    | "ORG_HAS_FISCAL_SPONSOR"
    | "ORG_FISCAL_SPONSOR_NAME"
    | "ORG_FISCAL_SPONSOR_EIN"
    | "ORG_FISCAL_SPONSOR_ADDRESS"
    | "ORG_MISSION"
    | "ORG_VISION"
    | "ORG_DEI"
    | "ORG_FOUNDED_YEAR"
    | "ORG_EMP_FULL_TIME"
    | "ORG_EMP_PART_TIME"
    | "ORG_PRIMARY_CONTACT"
    | "ORG_PRIMARY_CONTACT_NAME"
    | "ORG_PRIMARY_CONTACT_EMAIL"
    | "ORG_PROJECT_DIRECTOR"
    | "ORG_PROJECT_DIRECTOR_NAME"
    | "ORG_PROJECT_DIRECTOR_EMAIL"
    | "ORG_EXECUTIVE"
    | "ORG_EXECUTIVE_NAME"
    | "ORG_EXECUTIVE_EMAIL"
    | "ORG_BUDGET"
    | "ORG_BUDGET_REVENUE"
    | "ORG_BUDGET_EXPENDITURES"
    | "ORG_SOCIAL"
    | "ORG_SOCIAL_FACEBOOK"
    | "ORG_SOCIAL_INSTAGRAM"
    | "ORG_SOCIAL_TWITTER"
    | "ORG_SOCIAL_LINKEDIN"
    | "ORG_SOCIAL_GUIDESTAR"
    | "GRANT_AMOUNT_REQ"
    | "GRANT_TYPE"
    | "GRANT_PROJECT_TITLE"
    | "GRANT_PROJECT_BUDGET"
    | "GRANT_CO_FUNDING"
    | "GRANT_PERIOD"
    | "GRANT_PERIOD_START"
    | "GRANT_PERIOD_END"
    | "GRANT_PROP_TITLE"
    | "GRANT_RELEVANCY"
    | "GRANT_AREA"
    | "GRANT_AREA_CITY"
    | "GRANT_AREA_STATE"
    | "GRANT_AREA_COUNTRY"
    | "GRANT_POP_SERVED"
    | "PAGE_DIVIDER"
    | "TEXT_DESCRIPTION"
    | "FORMATTED_TEXT"
    | "CURRENCY"
    | "EXTERNAL_REFERENCES";
  id: string;
  value: FormItemValue;
  label: string;
  options: FormItemOptions;
  section: string;
  description: string;
  expectedResponses: string[];

  constructor(
    _type:
      | "FILE_UPLOAD"
      | "FILE_DOWNLOAD"
      | "SINGLE_RESPONSE"
      | "MULTI_RESPONSE"
      | "DROPDOWN_LIST"
      | "MULTI_DROPDOWN_LIST"
      | "RATING"
      | "TEXT"
      | "SHORT_TEXT"
      | "FOUNDATION_USER"
      | "TABLE"
      | "NUMBER"
      | "DATE"
      | "BUDGET_CATEGORY"
      | "REPORT_TEMPLATE"
      | "YES_NO_CHECKBOX"
      | "ORG_LEGAL_NAME"
      | "ORG_DBA"
      | "ORG_LEGAL_STATUS"
      | "ORG_EIN"
      | "ORG_HQ"
      | "ORG_HQ_ADDRESS_1"
      | "ORG_HQ_ADDRESS_2"
      | "ORG_HQ_CITY"
      | "ORG_HQ_STATE"
      | "ORG_HQ_ZIPCODE"
      | "ORG_HQ_COUNTRY"
      | "ORG_MAILING_ADDR"
      | "ORG_MAILING_ADDRESS_1"
      | "ORG_MAILING_ADDRESS_2"
      | "ORG_MAILING_CITY"
      | "ORG_MAILING_STATE"
      | "ORG_MAILING_ZIPCODE"
      | "ORG_MAILING_COUNTRY"
      | "ORG_PHONE_NUMBER"
      | "ORG_EMAIL"
      | "ORG_WEBSITE"
      | "ORG_FISCAL_SPONSOR"
      | "ORG_HAS_FISCAL_SPONSOR"
      | "ORG_FISCAL_SPONSOR_NAME"
      | "ORG_FISCAL_SPONSOR_EIN"
      | "ORG_FISCAL_SPONSOR_ADDRESS"
      | "ORG_MISSION"
      | "ORG_VISION"
      | "ORG_DEI"
      | "ORG_FOUNDED_YEAR"
      | "ORG_EMP_FULL_TIME"
      | "ORG_EMP_PART_TIME"
      | "ORG_PRIMARY_CONTACT"
      | "ORG_PRIMARY_CONTACT_NAME"
      | "ORG_PRIMARY_CONTACT_EMAIL"
      | "ORG_PROJECT_DIRECTOR"
      | "ORG_PROJECT_DIRECTOR_NAME"
      | "ORG_PROJECT_DIRECTOR_EMAIL"
      | "ORG_EXECUTIVE"
      | "ORG_EXECUTIVE_NAME"
      | "ORG_EXECUTIVE_EMAIL"
      | "ORG_BUDGET"
      | "ORG_BUDGET_REVENUE"
      | "ORG_BUDGET_EXPENDITURES"
      | "ORG_SOCIAL"
      | "ORG_SOCIAL_FACEBOOK"
      | "ORG_SOCIAL_INSTAGRAM"
      | "ORG_SOCIAL_TWITTER"
      | "ORG_SOCIAL_LINKEDIN"
      | "ORG_SOCIAL_GUIDESTAR"
      | "GRANT_AMOUNT_REQ"
      | "GRANT_TYPE"
      | "GRANT_PROJECT_TITLE"
      | "GRANT_PROJECT_BUDGET"
      | "GRANT_CO_FUNDING"
      | "GRANT_PERIOD"
      | "GRANT_PERIOD_START"
      | "GRANT_PERIOD_END"
      | "GRANT_PROP_TITLE"
      | "GRANT_RELEVANCY"
      | "GRANT_AREA"
      | "GRANT_AREA_CITY"
      | "GRANT_AREA_STATE"
      | "GRANT_AREA_COUNTRY"
      | "GRANT_POP_SERVED"
      | "PAGE_DIVIDER"
      | "TEXT_DESCRIPTION"
      | "FORMATTED_TEXT"
      | "CURRENCY"
      | "EXTERNAL_REFERENCES",
    _id: string,
    _value: FormItemValue,
    _label: string,
    _options: FormItemOptions,
    _section: string,
    _description: string,
    _expectedResponses: string[]
  ) {
    this.type = _type;
    this.id = _id;
    this.value = _value;
    this.label = _label;
    this.options = _options;
    this.section = _section;
    this.description = _description;
    this.expectedResponses = _expectedResponses;
  }
}

class FormItemOptions {
  scale: number;
  required: boolean;
  internal: boolean;
  displayConditions: DisplayCondition[];
  fieldBinding: string;
  fieldBindingOverwriteRule: "SAVE_ALL" | "SAVE_NON_BLANK" | "OVERWRITE_BLANK";
  maxLength: number;
  minLength: number;

  constructor(
    _scale: number,
    _required: boolean,
    _internal: boolean,
    _displayConditions: DisplayCondition[],
    _fieldBinding: string,
    _fieldBindingOverwriteRule:
      | "SAVE_ALL"
      | "SAVE_NON_BLANK"
      | "OVERWRITE_BLANK",
    _maxLength: number,
    _minLength: number
  ) {
    this.scale = _scale;
    this.required = _required;
    this.internal = _internal;
    this.displayConditions = _displayConditions;
    this.fieldBinding = _fieldBinding;
    this.fieldBindingOverwriteRule = _fieldBindingOverwriteRule;
    this.maxLength = _maxLength;
    this.minLength = _minLength;
  }
}

class FormItemResponseEntity {
  component: FormItem;
  response: FormComponentSubmission;

  constructor(_component: FormItem, _response: FormComponentSubmission) {
    this.component = _component;
    this.response = _response;
  }
}

class FormItemValue {
  files: string[];
  options: FormOptionEntity[];
  document: any;
  placeholder: string;
  tableDisplayContent: TableDisplayContent;

  constructor(
    _files: string[],
    _options: FormOptionEntity[],
    _document: any,
    _placeholder: string,
    _tableDisplayContent: TableDisplayContent
  ) {
    this.files = _files;
    this.options = _options;
    this.document = _document;
    this.placeholder = _placeholder;
    this.tableDisplayContent = _tableDisplayContent;
  }
}

class FormOptionEntity {
  id: string;
  value: string;

  constructor(_id: string, _value: string) {
    this.id = _id;
    this.value = _value;
  }
}

class FormPDFResponseData {
  responses: FormItemResponseEntity[];
  pageTitle: string;

  constructor(_responses: FormItemResponseEntity[], _pageTitle: string) {
    this.responses = _responses;
    this.pageTitle = _pageTitle;
  }
}

class TableDisplayCell {
  id: string;
  cellType: "HEADER" | "NUMBER" | "TEXT";
  displayText: string;
  placeholder: string;
  editable: boolean;
  required: boolean;

  constructor(
    _id: string,
    _cellType: "HEADER" | "NUMBER" | "TEXT",
    _displayText: string,
    _placeholder: string,
    _editable: boolean,
    _required: boolean
  ) {
    this.id = _id;
    this.cellType = _cellType;
    this.displayText = _displayText;
    this.placeholder = _placeholder;
    this.editable = _editable;
    this.required = _required;
  }
}

class TableDisplayContent {
  rows: TableDisplayRow[];
  rowHeaders: TableDisplayCell[];
  columnHeaders: TableDisplayCell[];

  constructor(
    _rows: TableDisplayRow[],
    _rowHeaders: TableDisplayCell[],
    _columnHeaders: TableDisplayCell[]
  ) {
    this.rows = _rows;
    this.rowHeaders = _rowHeaders;
    this.columnHeaders = _columnHeaders;
  }
}

class TableDisplayRow {
  id: string;
  cells: TableDisplayCell[];

  constructor(_id: string, _cells: TableDisplayCell[]) {
    this.id = _id;
    this.cells = _cells;
  }
}

class TableResponseCell {
  response: string;

  constructor(_response: string) {
    this.response = _response;
  }
}

class TableSubmissionRow {
  cells: FormComponentSubmission[];

  constructor(_cells: FormComponentSubmission[]) {
    this.cells = _cells;
  }
}

class DeleteFileInfo {
  deleteFileSource:
    | "SUBMISSION_ADDITIONAL_FILES"
    | "SUBMISSION_RESPONSES"
    | "TASK_RESPONSES"
    | "SIGNATURES"
    | "PAYMENT_DETAILS"
    | "USER_UPLOAD";
  deleteFileId: string;

  constructor(
    _deleteFileSource:
      | "SUBMISSION_ADDITIONAL_FILES"
      | "SUBMISSION_RESPONSES"
      | "TASK_RESPONSES"
      | "SIGNATURES"
      | "PAYMENT_DETAILS"
      | "USER_UPLOAD",
    _deleteFileId: string
  ) {
    this.deleteFileSource = _deleteFileSource;
    this.deleteFileId = _deleteFileId;
  }
}

class Foundation {
  id: string;
  displayName: string;
  ein: string;
  subdomain: string;
  created: string;
  logoFile: PresignedFile;
  granteeMFAEnabled: boolean;
  foundationMFAEnabled: boolean;

  constructor(
    _id: string,
    _displayName: string,
    _ein: string,
    _subdomain: string,
    _created: string,
    _logoFile: PresignedFile,
    _granteeMFAEnabled: boolean,
    _foundationMFAEnabled: boolean
  ) {
    this.id = _id;
    this.displayName = _displayName;
    this.ein = _ein;
    this.subdomain = _subdomain;
    this.created = _created;
    this.logoFile = _logoFile;
    this.granteeMFAEnabled = _granteeMFAEnabled;
    this.foundationMFAEnabled = _foundationMFAEnabled;
  }
}

class FoundationUser {
  id: string;
  foundationId: string;
  displayName: string;
  email: string;
  created: string;
  title: string;
  role: "ADMIN" | "USER" | "PAYMENTS" | "BOARD_MEMBER";
  active: boolean;
  pronouns: string;
  suffix: string;
  sendEmail: boolean;

  constructor(
    _id: string,
    _foundationId: string,
    _displayName: string,
    _email: string,
    _created: string,
    _title: string,
    _role: "ADMIN" | "USER" | "PAYMENTS" | "BOARD_MEMBER",
    _active: boolean,
    _pronouns: string,
    _suffix: string,
    _sendEmail: boolean
  ) {
    this.id = _id;
    this.foundationId = _foundationId;
    this.displayName = _displayName;
    this.email = _email;
    this.created = _created;
    this.title = _title;
    this.role = _role;
    this.active = _active;
    this.pronouns = _pronouns;
    this.suffix = _suffix;
    this.sendEmail = _sendEmail;
  }
}

class NonprofitUser {
  id: string;
  displayName: string;
  email: string;
  active: boolean;
  temelioRole: "SUPERADMIN" | "ADMIN" | "USER";
  created: string;
  suffix: string;
  pronouns: string;
  ofacFlags: OfacFlags;
  mfaRequired: boolean;
  foundationRoleMap: any;
  nonprofitRoleMap: any;
  associatedFoundationsFromNonprofit: string[];
  nonprofitId: string;
  title: string;
  role: "ADMIN" | "USER";
  primaryContact: boolean;
  signatory: boolean;
  name: string;
  temelioSuperuser: boolean;
  temelioAdmin: boolean;
  hasAdminAccess: boolean;

  constructor(
    _id: string,
    _displayName: string,
    _email: string,
    _active: boolean,
    _temelioRole: "SUPERADMIN" | "ADMIN" | "USER",
    _created: string,
    _suffix: string,
    _pronouns: string,
    _ofacFlags: OfacFlags,
    _mfaRequired: boolean,
    _foundationRoleMap: any,
    _nonprofitRoleMap: any,
    _associatedFoundationsFromNonprofit: string[],
    _nonprofitId: string,
    _title: string,
    _role: "ADMIN" | "USER",
    _primaryContact: boolean,
    _signatory: boolean,
    _name: string,
    _temelioSuperuser: boolean,
    _temelioAdmin: boolean,
    _hasAdminAccess: boolean
  ) {
    this.id = _id;
    this.displayName = _displayName;
    this.email = _email;
    this.active = _active;
    this.temelioRole = _temelioRole;
    this.created = _created;
    this.suffix = _suffix;
    this.pronouns = _pronouns;
    this.ofacFlags = _ofacFlags;
    this.mfaRequired = _mfaRequired;
    this.foundationRoleMap = _foundationRoleMap;
    this.nonprofitRoleMap = _nonprofitRoleMap;
    this.associatedFoundationsFromNonprofit =
      _associatedFoundationsFromNonprofit;
    this.nonprofitId = _nonprofitId;
    this.title = _title;
    this.role = _role;
    this.primaryContact = _primaryContact;
    this.signatory = _signatory;
    this.name = _name;
    this.temelioSuperuser = _temelioSuperuser;
    this.temelioAdmin = _temelioAdmin;
    this.hasAdminAccess = _hasAdminAccess;
  }
}

class OfacFlags {
  sdn: OfacSdn[];
  flaggedAt: string;
  resolvedAt: string;

  constructor(_sdn: OfacSdn[], _flaggedAt: string, _resolvedAt: string) {
    this.sdn = _sdn;
    this.flaggedAt = _flaggedAt;
    this.resolvedAt = _resolvedAt;
  }
}

class OfacSdn {
  reason: string;
  score: number;
  names: string[];
  aka: string[];
  emails: string[];
  id: string;
  type: string;
  programs: string[];
  list: string;

  constructor(
    _reason: string,
    _score: number,
    _names: string[],
    _aka: string[],
    _emails: string[],
    _id: string,
    _type: string,
    _programs: string[],
    _list: string
  ) {
    this.reason = _reason;
    this.score = _score;
    this.names = _names;
    this.aka = _aka;
    this.emails = _emails;
    this.id = _id;
    this.type = _type;
    this.programs = _programs;
    this.list = _list;
  }
}

class PresignedFile {
  url: string;
  file: UploadedFile;

  constructor(_url: string, _file: UploadedFile) {
    this.url = _url;
    this.file = _file;
  }
}

class UploadedFile {
  id: string;
  displayName: string;
  filePath: string;
  fileViewPermission: "FOUNDATION_ONLY" | "ALL";
  folderId: string;
  folderType: "SUBMISSION" | "USER_FOLDER";
  fileSourceType:
    | "CRM"
    | "GRANT_APPLICATION"
    | "GRANT_FORM_PROPOSAL"
    | "TASK"
    | "SETTINGS";
  fileSourceId: string;
  foundationId: string;
  nonprofitId: string;
  createdBy: string;
  updatedBy: string;
  active: boolean;
  created: string;
  updated: string;
  fileType: "FOLDER" | "FILE";
  donorEntityId: string;
  submissionId: string;
  numberSubmissionForms: number;
  files: UploadedFile[];
  viewableToGrantee: boolean;
  deleteFileInfo: DeleteFileInfo;
  createdByFoundationUser: FoundationUser;
  createdByNonprofitUser: NonprofitUser;
  updatedByFoundationUser: FoundationUser;
  file: boolean;
  folder: boolean;
  grantFolder: boolean;
  deletable: boolean;

  constructor(
    _id: string,
    _displayName: string,
    _filePath: string,
    _fileViewPermission: "FOUNDATION_ONLY" | "ALL",
    _folderId: string,
    _folderType: "SUBMISSION" | "USER_FOLDER",
    _fileSourceType:
      | "CRM"
      | "GRANT_APPLICATION"
      | "GRANT_FORM_PROPOSAL"
      | "TASK"
      | "SETTINGS",
    _fileSourceId: string,
    _foundationId: string,
    _nonprofitId: string,
    _createdBy: string,
    _updatedBy: string,
    _active: boolean,
    _created: string,
    _updated: string,
    _fileType: "FOLDER" | "FILE",
    _donorEntityId: string,
    _submissionId: string,
    _numberSubmissionForms: number,
    _files: UploadedFile[],
    _viewableToGrantee: boolean,
    _deleteFileInfo: DeleteFileInfo,
    _createdByFoundationUser: FoundationUser,
    _createdByNonprofitUser: NonprofitUser,
    _updatedByFoundationUser: FoundationUser,
    _file: boolean,
    _folder: boolean,
    _grantFolder: boolean,
    _deletable: boolean
  ) {
    this.id = _id;
    this.displayName = _displayName;
    this.filePath = _filePath;
    this.fileViewPermission = _fileViewPermission;
    this.folderId = _folderId;
    this.folderType = _folderType;
    this.fileSourceType = _fileSourceType;
    this.fileSourceId = _fileSourceId;
    this.foundationId = _foundationId;
    this.nonprofitId = _nonprofitId;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.active = _active;
    this.created = _created;
    this.updated = _updated;
    this.fileType = _fileType;
    this.donorEntityId = _donorEntityId;
    this.submissionId = _submissionId;
    this.numberSubmissionForms = _numberSubmissionForms;
    this.files = _files;
    this.viewableToGrantee = _viewableToGrantee;
    this.deleteFileInfo = _deleteFileInfo;
    this.createdByFoundationUser = _createdByFoundationUser;
    this.createdByNonprofitUser = _createdByNonprofitUser;
    this.updatedByFoundationUser = _updatedByFoundationUser;
    this.file = _file;
    this.folder = _folder;
    this.grantFolder = _grantFolder;
    this.deletable = _deletable;
  }
}

class UserFoundationRole {
  userId: string;
  foundationId: string;
  title: string;
  role: "ADMIN" | "USER" | "PAYMENTS" | "BOARD_MEMBER";
  active: boolean;
  created: string;
  updated: string;
  sendEmail: boolean;

  constructor(
    _userId: string,
    _foundationId: string,
    _title: string,
    _role: "ADMIN" | "USER" | "PAYMENTS" | "BOARD_MEMBER",
    _active: boolean,
    _created: string,
    _updated: string,
    _sendEmail: boolean
  ) {
    this.userId = _userId;
    this.foundationId = _foundationId;
    this.title = _title;
    this.role = _role;
    this.active = _active;
    this.created = _created;
    this.updated = _updated;
    this.sendEmail = _sendEmail;
  }
}

class UserNonprofitRole {
  userId: string;
  nonprofitId: string;
  title: string;
  primaryContact: boolean;
  role: "ADMIN" | "USER";
  active: boolean;
  created: string;
  updated: string;
  sendEmail: boolean;
  signatory: boolean;

  constructor(
    _userId: string,
    _nonprofitId: string,
    _title: string,
    _primaryContact: boolean,
    _role: "ADMIN" | "USER",
    _active: boolean,
    _created: string,
    _updated: string,
    _sendEmail: boolean,
    _signatory: boolean
  ) {
    this.userId = _userId;
    this.nonprofitId = _nonprofitId;
    this.title = _title;
    this.primaryContact = _primaryContact;
    this.role = _role;
    this.active = _active;
    this.created = _created;
    this.updated = _updated;
    this.sendEmail = _sendEmail;
    this.signatory = _signatory;
  }
}

class Address {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;

  constructor(
    _address1: string,
    _address2: string,
    _city: string,
    _state: string,
    _zipcode: string,
    _country: string
  ) {
    this.address1 = _address1;
    this.address2 = _address2;
    this.city = _city;
    this.state = _state;
    this.zipcode = _zipcode;
    this.country = _country;
  }
}

class FiscalSponsor {
  name: string;
  ein: string;
  email: string;
  address: Address;
  primaryContactName: string;
  primaryContactEmail: string;

  constructor(
    _name: string,
    _ein: string,
    _email: string,
    _address: Address,
    _primaryContactName: string,
    _primaryContactEmail: string
  ) {
    this.name = _name;
    this.ein = _ein;
    this.email = _email;
    this.address = _address;
    this.primaryContactName = _primaryContactName;
    this.primaryContactEmail = _primaryContactEmail;
  }
}

class FoundationNonprofitCreateRequest {
  id: string;
  legalName: string;
  ein: string;
  entityType: "ORGANIZATION" | "INDIVIDUAL";
  hasFiscalSponsor: boolean;
  fiscalSponsor: FiscalSponsor;
  primaryContactEmail: string;
  primaryContactName: string;
  welcomeMessage: string;
  sendWelcomeMessage: boolean;
  created: string;
  suffix: string;
  pronouns: string;

  constructor(
    _id: string,
    _legalName: string,
    _ein: string,
    _entityType: "ORGANIZATION" | "INDIVIDUAL",
    _hasFiscalSponsor: boolean,
    _fiscalSponsor: FiscalSponsor,
    _primaryContactEmail: string,
    _primaryContactName: string,
    _welcomeMessage: string,
    _sendWelcomeMessage: boolean,
    _created: string,
    _suffix: string,
    _pronouns: string
  ) {
    this.id = _id;
    this.legalName = _legalName;
    this.ein = _ein;
    this.entityType = _entityType;
    this.hasFiscalSponsor = _hasFiscalSponsor;
    this.fiscalSponsor = _fiscalSponsor;
    this.primaryContactEmail = _primaryContactEmail;
    this.primaryContactName = _primaryContactName;
    this.welcomeMessage = _welcomeMessage;
    this.sendWelcomeMessage = _sendWelcomeMessage;
    this.created = _created;
    this.suffix = _suffix;
    this.pronouns = _pronouns;
  }
}

class AppUser {
  id: string;
  displayName: string;
  email: string;
  active: boolean;
  temelioRole: "SUPERADMIN" | "ADMIN" | "USER";
  created: string;
  suffix: string;
  pronouns: string;
  ofacFlags: OfacFlags;
  mfaRequired: boolean;
  foundationRoleMap: any;
  nonprofitRoleMap: any;
  associatedFoundationsFromNonprofit: string[];
  name: string;
  temelioSuperuser: boolean;
  temelioAdmin: boolean;
  hasAdminAccess: boolean;

  constructor(
    _id: string,
    _displayName: string,
    _email: string,
    _active: boolean,
    _temelioRole: "SUPERADMIN" | "ADMIN" | "USER",
    _created: string,
    _suffix: string,
    _pronouns: string,
    _ofacFlags: OfacFlags,
    _mfaRequired: boolean,
    _foundationRoleMap: any,
    _nonprofitRoleMap: any,
    _associatedFoundationsFromNonprofit: string[],
    _name: string,
    _temelioSuperuser: boolean,
    _temelioAdmin: boolean,
    _hasAdminAccess: boolean
  ) {
    this.id = _id;
    this.displayName = _displayName;
    this.email = _email;
    this.active = _active;
    this.temelioRole = _temelioRole;
    this.created = _created;
    this.suffix = _suffix;
    this.pronouns = _pronouns;
    this.ofacFlags = _ofacFlags;
    this.mfaRequired = _mfaRequired;
    this.foundationRoleMap = _foundationRoleMap;
    this.nonprofitRoleMap = _nonprofitRoleMap;
    this.associatedFoundationsFromNonprofit =
      _associatedFoundationsFromNonprofit;
    this.name = _name;
    this.temelioSuperuser = _temelioSuperuser;
    this.temelioAdmin = _temelioAdmin;
    this.hasAdminAccess = _hasAdminAccess;
  }
}

class UpdateAppUserRequest {
  id: string;
  displayName: string;
  email: string;
  active: boolean;
  temelioRole: "SUPERADMIN" | "ADMIN" | "USER";
  created: string;
  suffix: string;
  pronouns: string;
  ofacFlags: OfacFlags;
  mfaRequired: boolean;
  foundationRoleMap: any;
  nonprofitRoleMap: any;
  associatedFoundationsFromNonprofit: string[];
  sendEmail: boolean;
  name: string;
  temelioSuperuser: boolean;
  temelioAdmin: boolean;
  hasAdminAccess: boolean;

  constructor(
    _id: string,
    _displayName: string,
    _email: string,
    _active: boolean,
    _temelioRole: "SUPERADMIN" | "ADMIN" | "USER",
    _created: string,
    _suffix: string,
    _pronouns: string,
    _ofacFlags: OfacFlags,
    _mfaRequired: boolean,
    _foundationRoleMap: any,
    _nonprofitRoleMap: any,
    _associatedFoundationsFromNonprofit: string[],
    _sendEmail: boolean,
    _name: string,
    _temelioSuperuser: boolean,
    _temelioAdmin: boolean,
    _hasAdminAccess: boolean
  ) {
    this.id = _id;
    this.displayName = _displayName;
    this.email = _email;
    this.active = _active;
    this.temelioRole = _temelioRole;
    this.created = _created;
    this.suffix = _suffix;
    this.pronouns = _pronouns;
    this.ofacFlags = _ofacFlags;
    this.mfaRequired = _mfaRequired;
    this.foundationRoleMap = _foundationRoleMap;
    this.nonprofitRoleMap = _nonprofitRoleMap;
    this.associatedFoundationsFromNonprofit =
      _associatedFoundationsFromNonprofit;
    this.sendEmail = _sendEmail;
    this.name = _name;
    this.temelioSuperuser = _temelioSuperuser;
    this.temelioAdmin = _temelioAdmin;
    this.hasAdminAccess = _hasAdminAccess;
  }
}

class AdditionalContact {
  displayName: string;
  email: string;
  primaryContact: boolean;
  phoneNumber: string;
  title: string;
  startDate: string;
  endDate: string;
  inactive: boolean;

  constructor(
    _displayName: string,
    _email: string,
    _primaryContact: boolean,
    _phoneNumber: string,
    _title: string,
    _startDate: string,
    _endDate: string,
    _inactive: boolean
  ) {
    this.displayName = _displayName;
    this.email = _email;
    this.primaryContact = _primaryContact;
    this.phoneNumber = _phoneNumber;
    this.title = _title;
    this.startDate = _startDate;
    this.endDate = _endDate;
    this.inactive = _inactive;
  }
}

class FoundationNonprofitInteraction {
  foundationId: string;
  nonprofitId: string;
  foundationPOC: string;
  customFields: any;
  additionalInfo: InteractionAdditionalInfo;
  created: string;

  constructor(
    _foundationId: string,
    _nonprofitId: string,
    _foundationPOC: string,
    _customFields: any,
    _additionalInfo: InteractionAdditionalInfo,
    _created: string
  ) {
    this.foundationId = _foundationId;
    this.nonprofitId = _nonprofitId;
    this.foundationPOC = _foundationPOC;
    this.customFields = _customFields;
    this.additionalInfo = _additionalInfo;
    this.created = _created;
  }
}

class IRS990Details {
  conflictOfInterest: string;

  constructor(_conflictOfInterest: string) {
    this.conflictOfInterest = _conflictOfInterest;
  }
}

class InteractionAdditionalInfo {
  additionalContacts: AdditionalContact[];
  qbVendorDetails: QBVendorDetails;
  organizationTags: string[];
  irs990Details: IRS990Details;

  constructor(
    _additionalContacts: AdditionalContact[],
    _qbVendorDetails: QBVendorDetails,
    _organizationTags: string[],
    _irs990Details: IRS990Details
  ) {
    this.additionalContacts = _additionalContacts;
    this.qbVendorDetails = _qbVendorDetails;
    this.organizationTags = _organizationTags;
    this.irs990Details = _irs990Details;
  }
}

class QBVendorDetails {
  id: string;

  constructor(_id: string) {
    this.id = _id;
  }
}

class DocusignTokenResponse {
  accessToken: string;
  refreshToken: string;

  constructor(_accessToken: string, _refreshToken: string) {
    this.accessToken = _accessToken;
    this.refreshToken = _refreshToken;
  }
}

class DocusignUserFoundationSettings {
  accessToken: DocusignTokenResponse;

  constructor(_accessToken: DocusignTokenResponse) {
    this.accessToken = _accessToken;
  }
}

class NotificationSetting {
  type:
    | "MENTIONS"
    | "TASK_ASSIGNEES"
    | "TASK_DUE"
    | "GRANTEE_TASK_DUE"
    | "NEW_APPLICATION"
    | "GRANTEE_PROFILE_UPDATE"
    | "PROPOSAL_STAGE_CHANGE"
    | "VIEWER_TASK"
    | "VIEWER_PROPOSAL";
  enabled: boolean;

  constructor(
    _type:
      | "MENTIONS"
      | "TASK_ASSIGNEES"
      | "TASK_DUE"
      | "GRANTEE_TASK_DUE"
      | "NEW_APPLICATION"
      | "GRANTEE_PROFILE_UPDATE"
      | "PROPOSAL_STAGE_CHANGE"
      | "VIEWER_TASK"
      | "VIEWER_PROPOSAL",
    _enabled: boolean
  ) {
    this.type = _type;
    this.enabled = _enabled;
  }
}

class NylasAccessToken {
  accessToken: string;
  accountId: string;
  email: string;
  provider: string;

  constructor(
    _accessToken: string,
    _accountId: string,
    _email: string,
    _provider: string
  ) {
    this.accessToken = _accessToken;
    this.accountId = _accountId;
    this.email = _email;
    this.provider = _provider;
  }
}

class NylasUserFoundationSettings {
  accessToken: NylasAccessToken;
  sharedCalendarId: string;

  constructor(_accessToken: NylasAccessToken, _sharedCalendarId: string) {
    this.accessToken = _accessToken;
    this.sharedCalendarId = _sharedCalendarId;
  }
}

class SystemNotifications {
  settings: NotificationSetting[];

  constructor(_settings: NotificationSetting[]) {
    this.settings = _settings;
  }
}

class UserBrandingSettings {
  avatarFile: string;

  constructor(_avatarFile: string) {
    this.avatarFile = _avatarFile;
  }
}

class UserFoundationSettings {
  systemNotifications: SystemNotifications;
  nylasSettings: NylasUserFoundationSettings;
  docusignSettings: DocusignUserFoundationSettings;
  brandingSettings: UserBrandingSettings;
  pipelineSettings: UserPipelineSettings;

  constructor(
    _systemNotifications: SystemNotifications,
    _nylasSettings: NylasUserFoundationSettings,
    _docusignSettings: DocusignUserFoundationSettings,
    _brandingSettings: UserBrandingSettings,
    _pipelineSettings: UserPipelineSettings
  ) {
    this.systemNotifications = _systemNotifications;
    this.nylasSettings = _nylasSettings;
    this.docusignSettings = _docusignSettings;
    this.brandingSettings = _brandingSettings;
    this.pipelineSettings = _pipelineSettings;
  }
}

class UserPipelineSettings {
  defaultPipelineId: string;

  constructor(_defaultPipelineId: string) {
    this.defaultPipelineId = _defaultPipelineId;
  }
}

class Faceting {
  maxValuesPerFacet: number;

  constructor(_maxValuesPerFacet: number) {
    this.maxValuesPerFacet = _maxValuesPerFacet;
  }
}

class Pagination {
  maxTotalHits: number;

  constructor(_maxTotalHits: number) {
    this.maxTotalHits = _maxTotalHits;
  }
}

class SwapIndexesParams {
  indexes: string[];

  constructor(_indexes: string[]) {
    this.indexes = _indexes;
  }
}

class Task {
  id: string;
  name: string;
  foundationId: string;
  nonprofitId: string;
  createdBy: string;
  updatedBy: string;
  systemLabel:
    | "GRANT_AGREEMENT"
    | "PAYMENT"
    | "REPORTING"
    | "REVIEW"
    | "REMINDER"
    | "CUSTOM_REMINDER"
    | "DOCUSIGN"
    | "PLAID_PAYMENT_DETAILS"
    | "EXTERNAL"
    | "EXTERNAL_REVIEWER"
    | "REFEREE"
    | "GRANT_UPLOAD"
    | "GRANT_TEMPLATE"
    | "MULTI_GRANT_DOCUMENT_REVIEW"
    | "GRANT_DOCUMENT_REVIEW"
    | "GRANT_SIGNATURE_REQUEST"
    | "PLAID_PAYMENT_SECURE_PAYMENT_STORAGE"
    | "SECURE_PAYMENT_STORAGE"
    | "PDF";
  taskType: "INTERNAL" | "EXTERNAL";
  status: "DRAFT" | "OPEN" | "RESOLVED" | "CLOSED";
  description: string;
  sourceType:
    | "CRM"
    | "GRANT_APPLICATION"
    | "REPORT"
    | "AGREEMENT_TEMPLATE"
    | "DONOR";
  sourceId: string;
  additionalSources: TaskSourceEntity[];
  additionalInfo: TaskAdditionalInfo;
  assignees: string[];
  watchers: string[];
  components: FormItem[];
  deadline: string;
  created: string;
  updated: string;
  signatureOrderList: SignatureOrder[];
  disableOldSignatureWorkflow: boolean;
  customEmailTemplate: CustomEmailTemplate;
  documentHTML: string;
  encodedSignatureFile: string;
  achDetails: AnvilPaymentDetails;
  pdfResponses: AnvilPDFFieldResponses;
  submission: GrantProposalSubmission;
  nonprofit: Nonprofit;
  foundation: Foundation;
  foundationAssignees: FoundationUser[];
  nonprofitAssignees: NonprofitUser[];
  foundationWatchers: FoundationUser[];
  externalReviewer: AppUser;
  externalReviewers: AppUser[];
  referee: AppUser;
  createdByUser: FoundationUser;
  documentToSign: PresignedFile;
  signedDocumentFile: PresignedFile;
  bankAccountDocumentFile: PresignedFile;
  donorEntity: DonorEntity;

  constructor(
    _id: string,
    _name: string,
    _foundationId: string,
    _nonprofitId: string,
    _createdBy: string,
    _updatedBy: string,
    _systemLabel:
      | "GRANT_AGREEMENT"
      | "PAYMENT"
      | "REPORTING"
      | "REVIEW"
      | "REMINDER"
      | "CUSTOM_REMINDER"
      | "DOCUSIGN"
      | "PLAID_PAYMENT_DETAILS"
      | "EXTERNAL"
      | "EXTERNAL_REVIEWER"
      | "REFEREE"
      | "GRANT_UPLOAD"
      | "GRANT_TEMPLATE"
      | "MULTI_GRANT_DOCUMENT_REVIEW"
      | "GRANT_DOCUMENT_REVIEW"
      | "GRANT_SIGNATURE_REQUEST"
      | "PLAID_PAYMENT_SECURE_PAYMENT_STORAGE"
      | "SECURE_PAYMENT_STORAGE"
      | "PDF",
    _taskType: "INTERNAL" | "EXTERNAL",
    _status: "DRAFT" | "OPEN" | "RESOLVED" | "CLOSED",
    _description: string,
    _sourceType:
      | "CRM"
      | "GRANT_APPLICATION"
      | "REPORT"
      | "AGREEMENT_TEMPLATE"
      | "DONOR",
    _sourceId: string,
    _additionalSources: TaskSourceEntity[],
    _additionalInfo: TaskAdditionalInfo,
    _assignees: string[],
    _watchers: string[],
    _components: FormItem[],
    _deadline: string,
    _created: string,
    _updated: string,
    _signatureOrderList: SignatureOrder[],
    _disableOldSignatureWorkflow: boolean,
    _customEmailTemplate: CustomEmailTemplate,
    _documentHTML: string,
    _encodedSignatureFile: string,
    _achDetails: AnvilPaymentDetails,
    _pdfResponses: AnvilPDFFieldResponses,
    _submission: GrantProposalSubmission,
    _nonprofit: Nonprofit,
    _foundation: Foundation,
    _foundationAssignees: FoundationUser[],
    _nonprofitAssignees: NonprofitUser[],
    _foundationWatchers: FoundationUser[],
    _externalReviewer: AppUser,
    _externalReviewers: AppUser[],
    _referee: AppUser,
    _createdByUser: FoundationUser,
    _documentToSign: PresignedFile,
    _signedDocumentFile: PresignedFile,
    _bankAccountDocumentFile: PresignedFile,
    _donorEntity: DonorEntity
  ) {
    this.id = _id;
    this.name = _name;
    this.foundationId = _foundationId;
    this.nonprofitId = _nonprofitId;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.systemLabel = _systemLabel;
    this.taskType = _taskType;
    this.status = _status;
    this.description = _description;
    this.sourceType = _sourceType;
    this.sourceId = _sourceId;
    this.additionalSources = _additionalSources;
    this.additionalInfo = _additionalInfo;
    this.assignees = _assignees;
    this.watchers = _watchers;
    this.components = _components;
    this.deadline = _deadline;
    this.created = _created;
    this.updated = _updated;
    this.signatureOrderList = _signatureOrderList;
    this.disableOldSignatureWorkflow = _disableOldSignatureWorkflow;
    this.customEmailTemplate = _customEmailTemplate;
    this.documentHTML = _documentHTML;
    this.encodedSignatureFile = _encodedSignatureFile;
    this.achDetails = _achDetails;
    this.pdfResponses = _pdfResponses;
    this.submission = _submission;
    this.nonprofit = _nonprofit;
    this.foundation = _foundation;
    this.foundationAssignees = _foundationAssignees;
    this.nonprofitAssignees = _nonprofitAssignees;
    this.foundationWatchers = _foundationWatchers;
    this.externalReviewer = _externalReviewer;
    this.externalReviewers = _externalReviewers;
    this.referee = _referee;
    this.createdByUser = _createdByUser;
    this.documentToSign = _documentToSign;
    this.signedDocumentFile = _signedDocumentFile;
    this.bankAccountDocumentFile = _bankAccountDocumentFile;
    this.donorEntity = _donorEntity;
  }
}

class TaskDetails {
  receivedDocuments: number;
  indexedDocuments: number;
  deletedDocuments: number;
  primaryKey: string;
  rankingRules: string[];
  searchableAttributes: string[];
  displayedAttributes: string[];
  filterableAttributes: string[];
  sortableAttributes: string[];
  stopWords: string[];
  synonyms: any;
  distinctAttribute: string;
  typoTolerance: TypoTolerance;
  providedIds: number;
  pagination: Pagination;
  faceting: Faceting;
  dumpUid: string;
  matchedTasks: number;
  canceledTasks: number;
  originalFilter: string;
  deletedTasks: number;
  swaps: SwapIndexesParams[];

  constructor(
    _receivedDocuments: number,
    _indexedDocuments: number,
    _deletedDocuments: number,
    _primaryKey: string,
    _rankingRules: string[],
    _searchableAttributes: string[],
    _displayedAttributes: string[],
    _filterableAttributes: string[],
    _sortableAttributes: string[],
    _stopWords: string[],
    _synonyms: any,
    _distinctAttribute: string,
    _typoTolerance: TypoTolerance,
    _providedIds: number,
    _pagination: Pagination,
    _faceting: Faceting,
    _dumpUid: string,
    _matchedTasks: number,
    _canceledTasks: number,
    _originalFilter: string,
    _deletedTasks: number,
    _swaps: SwapIndexesParams[]
  ) {
    this.receivedDocuments = _receivedDocuments;
    this.indexedDocuments = _indexedDocuments;
    this.deletedDocuments = _deletedDocuments;
    this.primaryKey = _primaryKey;
    this.rankingRules = _rankingRules;
    this.searchableAttributes = _searchableAttributes;
    this.displayedAttributes = _displayedAttributes;
    this.filterableAttributes = _filterableAttributes;
    this.sortableAttributes = _sortableAttributes;
    this.stopWords = _stopWords;
    this.synonyms = _synonyms;
    this.distinctAttribute = _distinctAttribute;
    this.typoTolerance = _typoTolerance;
    this.providedIds = _providedIds;
    this.pagination = _pagination;
    this.faceting = _faceting;
    this.dumpUid = _dumpUid;
    this.matchedTasks = _matchedTasks;
    this.canceledTasks = _canceledTasks;
    this.originalFilter = _originalFilter;
    this.deletedTasks = _deletedTasks;
    this.swaps = _swaps;
  }
}

class TaskError {
  taskErrorCode: string;
  taskErrorType: string;
  taskErrorLink: string;

  constructor(
    _taskErrorCode: string,
    _taskErrorType: string,
    _taskErrorLink: string
  ) {
    this.taskErrorCode = _taskErrorCode;
    this.taskErrorType = _taskErrorType;
    this.taskErrorLink = _taskErrorLink;
  }
}

class TypoTolerance {
  enabled: boolean;
  minWordSizeForTypos: any;
  disableOnWords: string[];
  disableOnAttributes: string[];

  constructor(
    _enabled: boolean,
    _minWordSizeForTypos: any,
    _disableOnWords: string[],
    _disableOnAttributes: string[]
  ) {
    this.enabled = _enabled;
    this.minWordSizeForTypos = _minWordSizeForTypos;
    this.disableOnWords = _disableOnWords;
    this.disableOnAttributes = _disableOnAttributes;
  }
}

class CandidEntityResponse {
  ein: string;
  demographicsData: DemographicsResponse;
  demographicsUpdatedAt: string;
  premierData: PremierResponse;
  premierUpdatedAt: string;
  premierPDFLink: string;
  premierPDFUpdatedAt: string;
  premierPDFLinkFile: PresignedFile;

  constructor(
    _ein: string,
    _demographicsData: DemographicsResponse,
    _demographicsUpdatedAt: string,
    _premierData: PremierResponse,
    _premierUpdatedAt: string,
    _premierPDFLink: string,
    _premierPDFUpdatedAt: string,
    _premierPDFLinkFile: PresignedFile
  ) {
    this.ein = _ein;
    this.demographicsData = _demographicsData;
    this.demographicsUpdatedAt = _demographicsUpdatedAt;
    this.premierData = _premierData;
    this.premierUpdatedAt = _premierUpdatedAt;
    this.premierPDFLink = _premierPDFLink;
    this.premierPDFUpdatedAt = _premierPDFUpdatedAt;
    this.premierPDFLinkFile = _premierPDFLinkFile;
  }
}

class DemographicsCategory {
  category: string;
  board_members_not_collected: boolean;
  staff_not_collected: boolean;
  senior_staff_not_collected: boolean;
  subcategories: DemographicsSubcategory[];

  constructor(
    _category: string,
    _board_members_not_collected: boolean,
    _staff_not_collected: boolean,
    _senior_staff_not_collected: boolean,
    _subcategories: DemographicsSubcategory[]
  ) {
    this.category = _category;
    this.board_members_not_collected = _board_members_not_collected;
    this.staff_not_collected = _staff_not_collected;
    this.senior_staff_not_collected = _senior_staff_not_collected;
    this.subcategories = _subcategories;
  }
}

class DemographicsData {
  summary: DemographicsSummary;
  demographics: DemographicsDetails;

  constructor(
    _summary: DemographicsSummary,
    _demographics: DemographicsDetails
  ) {
    this.summary = _summary;
    this.demographics = _demographics;
  }
}

class DemographicsDetails {
  staff_level_totals: DemographicsStaffLevelTotals;
  categories: DemographicsCategory[];

  constructor(
    _staff_level_totals: DemographicsStaffLevelTotals,
    _categories: DemographicsCategory[]
  ) {
    this.staff_level_totals = _staff_level_totals;
    this.categories = _categories;
  }
}

class DemographicsResponse {
  code: number;
  message: string;
  took: number;
  errors: object[];
  data: DemographicsData;

  constructor(
    _code: number,
    _message: string,
    _took: number,
    _errors: object[],
    _data: DemographicsData
  ) {
    this.code = _code;
    this.message = _message;
    this.took = _took;
    this.errors = _errors;
    this.data = _data;
  }
}

class DemographicsStaffLevelTotals {
  total_board_members: string;
  total_staff: string;
  total_senior_staff: string;

  constructor(
    _total_board_members: string,
    _total_staff: string,
    _total_senior_staff: string
  ) {
    this.total_board_members = _total_board_members;
    this.total_staff = _total_staff;
    this.total_senior_staff = _total_senior_staff;
  }
}

class DemographicsSubcategory {
  subcategory: string;
  board_members: number;
  staff: number;
  senior_staff: number;
  reported_by_ceo: boolean;
  reported_by_coceo: boolean;

  constructor(
    _subcategory: string,
    _board_members: number,
    _staff: number,
    _senior_staff: number,
    _reported_by_ceo: boolean,
    _reported_by_coceo: boolean
  ) {
    this.subcategory = _subcategory;
    this.board_members = _board_members;
    this.staff = _staff;
    this.senior_staff = _senior_staff;
    this.reported_by_ceo = _reported_by_ceo;
    this.reported_by_coceo = _reported_by_coceo;
  }
}

class DemographicsSummary {
  organization_name: string;
  ein: string;
  city: string;
  state: string;
  demographics_status: string;
  date_last_modified: string;

  constructor(
    _organization_name: string,
    _ein: string,
    _city: string,
    _state: string,
    _demographics_status: string,
    _date_last_modified: string
  ) {
    this.organization_name = _organization_name;
    this.ein = _ein;
    this.city = _city;
    this.state = _state;
    this.demographics_status = _demographics_status;
    this.date_last_modified = _date_last_modified;
  }
}

class PremierAccountingRatio {
  year: number;
  months_of_cash: string;
  liquidity: string;
  fringe_rate: string;
  net_gain_loss: string;

  constructor(
    _year: number,
    _months_of_cash: string,
    _liquidity: string,
    _fringe_rate: string,
    _net_gain_loss: string
  ) {
    this.year = _year;
    this.months_of_cash = _months_of_cash;
    this.liquidity = _liquidity;
    this.fringe_rate = _fringe_rate;
    this.net_gain_loss = _net_gain_loss;
  }
}

class PremierAccreditation {
  accreditation: string;
  year: string;

  constructor(_accreditation: string, _year: string) {
    this.accreditation = _accreditation;
    this.year = _year;
  }
}

class PremierAddress {
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  address_type: string;

  constructor(
    _address_line_1: string,
    _address_line_2: string,
    _city: string,
    _state: string,
    _postal_code: string,
    _country: string,
    _address_type: string
  ) {
    this.address_line_1 = _address_line_1;
    this.address_line_2 = _address_line_2;
    this.city = _city;
    this.state = _state;
    this.postal_code = _postal_code;
    this.country = _country;
    this.address_type = _address_type;
  }
}

class PremierAnnualReport {
  doc_name: string;
  contents: string;
  year: string;
  url: string;

  constructor(
    _doc_name: string,
    _contents: string,
    _year: string,
    _url: string
  ) {
    this.doc_name = _doc_name;
    this.contents = _contents;
    this.year = _year;
    this.url = _url;
  }
}

class PremierBalanceSheetComposition {
  cash: number;
  investments: number;
  receivables: number;
  gross_land_buildings_and_equipment_lbe: number;
  accumulated_depreciation_as_percent_of_lbe: string;
  liabilities_as_percent_of_net_assets: string;
  unrestricted_net_assets: number;
  temporarily_restricted_net_assets: number;
  permanently_restricted_net_assets: number;
  restricted_net_assets: number;
  total_net_assets: number;

  constructor(
    _cash: number,
    _investments: number,
    _receivables: number,
    _gross_land_buildings_and_equipment_lbe: number,
    _accumulated_depreciation_as_percent_of_lbe: string,
    _liabilities_as_percent_of_net_assets: string,
    _unrestricted_net_assets: number,
    _temporarily_restricted_net_assets: number,
    _permanently_restricted_net_assets: number,
    _restricted_net_assets: number,
    _total_net_assets: number
  ) {
    this.cash = _cash;
    this.investments = _investments;
    this.receivables = _receivables;
    this.gross_land_buildings_and_equipment_lbe =
      _gross_land_buildings_and_equipment_lbe;
    this.accumulated_depreciation_as_percent_of_lbe =
      _accumulated_depreciation_as_percent_of_lbe;
    this.liabilities_as_percent_of_net_assets =
      _liabilities_as_percent_of_net_assets;
    this.unrestricted_net_assets = _unrestricted_net_assets;
    this.temporarily_restricted_net_assets = _temporarily_restricted_net_assets;
    this.permanently_restricted_net_assets = _permanently_restricted_net_assets;
    this.restricted_net_assets = _restricted_net_assets;
    this.total_net_assets = _total_net_assets;
  }
}

class PremierBoardLeadershipPractice {
  question: string;
  answer: string;

  constructor(_question: string, _answer: string) {
    this.question = _question;
    this.answer = _answer;
  }
}

class PremierBoardOfDirector {
  name: string;
  title: string;
  company: string;

  constructor(_name: string, _title: string, _company: string) {
    this.name = _name;
    this.title = _title;
    this.company = _company;
  }
}

class PremierBusinessModelIndicators {
  profitability: PremierProfitability;
  revenue_composition: PremierRevenueComposition;
  expense_composition: PremierExpenseComposition;
  full_cost_components: PremierFullCostComponents;

  constructor(
    _profitability: PremierProfitability,
    _revenue_composition: PremierRevenueComposition,
    _expense_composition: PremierExpenseComposition,
    _full_cost_components: PremierFullCostComponents
  ) {
    this.profitability = _profitability;
    this.revenue_composition = _revenue_composition;
    this.expense_composition = _expense_composition;
    this.full_cost_components = _full_cost_components;
  }
}

class PremierCapitalStructureIndicators {
  liquidity: PremierLiquidity;
  balance_sheet_composition: PremierBalanceSheetComposition;

  constructor(
    _liquidity: PremierLiquidity,
    _balance_sheet_composition: PremierBalanceSheetComposition
  ) {
    this.liquidity = _liquidity;
    this.balance_sheet_composition = _balance_sheet_composition;
  }
}

class PremierCategory {
  category: string;
  board_members_not_collected: boolean;
  staff_not_collected: boolean;
  senior_staff_not_collected: boolean;
  subcategories: PremierSubcategory[];
  org_does_not_collect_for: PremierOrgDoesNotCollectFor;

  constructor(
    _category: string,
    _board_members_not_collected: boolean,
    _staff_not_collected: boolean,
    _senior_staff_not_collected: boolean,
    _subcategories: PremierSubcategory[],
    _org_does_not_collect_for: PremierOrgDoesNotCollectFor
  ) {
    this.category = _category;
    this.board_members_not_collected = _board_members_not_collected;
    this.staff_not_collected = _staff_not_collected;
    this.senior_staff_not_collected = _senior_staff_not_collected;
    this.subcategories = _subcategories;
    this.org_does_not_collect_for = _org_does_not_collect_for;
  }
}

class PremierCharitycheck {
  organization_id: string;
  organization_info_last_modified: string;
  ein: string;
  organization_name: string;
  organization_name_aka: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  state_name: string;
  zip: string;
  filing_req_code: string;
  charity_check_last_modified: string;
  pub78_church_message: any;
  pub78_organization_name: string;
  pub78_ein: string;
  pub78_verified: string;
  pub78_city: string;
  pub78_state: string;
  pub78_indicator: string;
  organization_types: PremierOrganizationType[];
  most_recent_pub78: string;
  most_recent_irb: string;
  bmf_church_message: any;
  bmf_organization_name: string;
  bmf_ein: string;
  bmf_status: string;
  most_recent_bmf: string;
  bmf_subsection: string;
  subsection_description: string;
  foundation_code: string;
  foundation_code_description: string;
  ruling_month: string;
  ruling_year: string;
  adv_ruling_month: string;
  adv_ruling_year: string;
  group_exemption: string;
  exempt_status_code: string;
  ofac_status: string;
  revocation_code: string;
  revocation_date: string;
  reinstatement_date: string;
  irs_bmf_pub78_conflict: string;
  foundation_509a_status: string;
  irb_organization_id: string;
  bulletin_number: string;
  bulletin_url: string;
  effective_date: string;
  irb_last_modified: string;
  report_date: string;
  foundation_type_code: string;
  foundation_type_description: string;
  parent_organizations: object[];

  constructor(
    _organization_id: string,
    _organization_info_last_modified: string,
    _ein: string,
    _organization_name: string,
    _organization_name_aka: string,
    _address_line1: string,
    _address_line2: string,
    _city: string,
    _state: string,
    _state_name: string,
    _zip: string,
    _filing_req_code: string,
    _charity_check_last_modified: string,
    _pub78_church_message: any,
    _pub78_organization_name: string,
    _pub78_ein: string,
    _pub78_verified: string,
    _pub78_city: string,
    _pub78_state: string,
    _pub78_indicator: string,
    _organization_types: PremierOrganizationType[],
    _most_recent_pub78: string,
    _most_recent_irb: string,
    _bmf_church_message: any,
    _bmf_organization_name: string,
    _bmf_ein: string,
    _bmf_status: string,
    _most_recent_bmf: string,
    _bmf_subsection: string,
    _subsection_description: string,
    _foundation_code: string,
    _foundation_code_description: string,
    _ruling_month: string,
    _ruling_year: string,
    _adv_ruling_month: string,
    _adv_ruling_year: string,
    _group_exemption: string,
    _exempt_status_code: string,
    _ofac_status: string,
    _revocation_code: string,
    _revocation_date: string,
    _reinstatement_date: string,
    _irs_bmf_pub78_conflict: string,
    _foundation_509a_status: string,
    _irb_organization_id: string,
    _bulletin_number: string,
    _bulletin_url: string,
    _effective_date: string,
    _irb_last_modified: string,
    _report_date: string,
    _foundation_type_code: string,
    _foundation_type_description: string,
    _parent_organizations: object[]
  ) {
    this.organization_id = _organization_id;
    this.organization_info_last_modified = _organization_info_last_modified;
    this.ein = _ein;
    this.organization_name = _organization_name;
    this.organization_name_aka = _organization_name_aka;
    this.address_line1 = _address_line1;
    this.address_line2 = _address_line2;
    this.city = _city;
    this.state = _state;
    this.state_name = _state_name;
    this.zip = _zip;
    this.filing_req_code = _filing_req_code;
    this.charity_check_last_modified = _charity_check_last_modified;
    this.pub78_church_message = _pub78_church_message;
    this.pub78_organization_name = _pub78_organization_name;
    this.pub78_ein = _pub78_ein;
    this.pub78_verified = _pub78_verified;
    this.pub78_city = _pub78_city;
    this.pub78_state = _pub78_state;
    this.pub78_indicator = _pub78_indicator;
    this.organization_types = _organization_types;
    this.most_recent_pub78 = _most_recent_pub78;
    this.most_recent_irb = _most_recent_irb;
    this.bmf_church_message = _bmf_church_message;
    this.bmf_organization_name = _bmf_organization_name;
    this.bmf_ein = _bmf_ein;
    this.bmf_status = _bmf_status;
    this.most_recent_bmf = _most_recent_bmf;
    this.bmf_subsection = _bmf_subsection;
    this.subsection_description = _subsection_description;
    this.foundation_code = _foundation_code;
    this.foundation_code_description = _foundation_code_description;
    this.ruling_month = _ruling_month;
    this.ruling_year = _ruling_year;
    this.adv_ruling_month = _adv_ruling_month;
    this.adv_ruling_year = _adv_ruling_year;
    this.group_exemption = _group_exemption;
    this.exempt_status_code = _exempt_status_code;
    this.ofac_status = _ofac_status;
    this.revocation_code = _revocation_code;
    this.revocation_date = _revocation_date;
    this.reinstatement_date = _reinstatement_date;
    this.irs_bmf_pub78_conflict = _irs_bmf_pub78_conflict;
    this.foundation_509a_status = _foundation_509a_status;
    this.irb_organization_id = _irb_organization_id;
    this.bulletin_number = _bulletin_number;
    this.bulletin_url = _bulletin_url;
    this.effective_date = _effective_date;
    this.irb_last_modified = _irb_last_modified;
    this.report_date = _report_date;
    this.foundation_type_code = _foundation_type_code;
    this.foundation_type_description = _foundation_type_description;
    this.parent_organizations = _parent_organizations;
  }
}

class PremierChartingImpactAnswer {
  question: string;
  answer: string;

  constructor(_question: string, _answer: string) {
    this.question = _question;
    this.answer = _answer;
  }
}

class PremierContractor {
  name: string;
  address: string;
  compensation: string;
  service_type: string;

  constructor(
    _name: string,
    _address: string,
    _compensation: string,
    _service_type: string
  ) {
    this.name = _name;
    this.address = _address;
    this.compensation = _compensation;
    this.service_type = _service_type;
  }
}

class PremierData {
  summary: PremierSummary;
  programs: PremierPrograms;
  financials: PremierFinancials;
  operations: PremierOperations;
  charitycheck: PremierCharitycheck;

  constructor(
    _summary: PremierSummary,
    _programs: PremierPrograms,
    _financials: PremierFinancials,
    _operations: PremierOperations,
    _charitycheck: PremierCharitycheck
  ) {
    this.summary = _summary;
    this.programs = _programs;
    this.financials = _financials;
    this.operations = _operations;
    this.charitycheck = _charitycheck;
  }
}

class PremierDemographics {
  staff_level_totals: PremierStaffLevelTotals;
  equity_strategies: PremierEquityStrategies;
  categories: PremierCategory[];

  constructor(
    _staff_level_totals: PremierStaffLevelTotals,
    _equity_strategies: PremierEquityStrategies,
    _categories: PremierCategory[]
  ) {
    this.staff_level_totals = _staff_level_totals;
    this.equity_strategies = _equity_strategies;
    this.categories = _categories;
  }
}

class PremierEquityStrategies {
  data_compensation: boolean;
  data_disparities: boolean;
  data_root_cause: any;
  data_programming_goals: any;
  data_feedback: boolean;
  data_demographics: any;
  data_strategic_plan: boolean;
  policy_standards: boolean;
  policy_promotion: boolean;
  policy_evaluation: boolean;
  policy_community: any;
  policy_leadership: boolean;
  policy_satisfaction: boolean;
  policy_equity: boolean;
  equity_strategy_last_modified: string;

  constructor(
    _data_compensation: boolean,
    _data_disparities: boolean,
    _data_root_cause: any,
    _data_programming_goals: any,
    _data_feedback: boolean,
    _data_demographics: any,
    _data_strategic_plan: boolean,
    _policy_standards: boolean,
    _policy_promotion: boolean,
    _policy_evaluation: boolean,
    _policy_community: any,
    _policy_leadership: boolean,
    _policy_satisfaction: boolean,
    _policy_equity: boolean,
    _equity_strategy_last_modified: string
  ) {
    this.data_compensation = _data_compensation;
    this.data_disparities = _data_disparities;
    this.data_root_cause = _data_root_cause;
    this.data_programming_goals = _data_programming_goals;
    this.data_feedback = _data_feedback;
    this.data_demographics = _data_demographics;
    this.data_strategic_plan = _data_strategic_plan;
    this.policy_standards = _policy_standards;
    this.policy_promotion = _policy_promotion;
    this.policy_evaluation = _policy_evaluation;
    this.policy_community = _policy_community;
    this.policy_leadership = _policy_leadership;
    this.policy_satisfaction = _policy_satisfaction;
    this.policy_equity = _policy_equity;
    this.equity_strategy_last_modified = _equity_strategy_last_modified;
  }
}

class PremierExpenseComposition {
  total_expenses_before_depreciation: number;
  total_expenses_percent_change_over_prior_year: string;
  personnel: string;
  professional_fees: string;
  occupancy: string;
  interest_expense: string;
  pass_through: string;
  all_other_expenses: string;

  constructor(
    _total_expenses_before_depreciation: number,
    _total_expenses_percent_change_over_prior_year: string,
    _personnel: string,
    _professional_fees: string,
    _occupancy: string,
    _interest_expense: string,
    _pass_through: string,
    _all_other_expenses: string
  ) {
    this.total_expenses_before_depreciation =
      _total_expenses_before_depreciation;
    this.total_expenses_percent_change_over_prior_year =
      _total_expenses_percent_change_over_prior_year;
    this.personnel = _personnel;
    this.professional_fees = _professional_fees;
    this.occupancy = _occupancy;
    this.interest_expense = _interest_expense;
    this.pass_through = _pass_through;
    this.all_other_expenses = _all_other_expenses;
  }
}

class PremierF990Financial {
  period_begin: string;
  period_end: string;
  membership_dues: number;
  revenue_contributions: number;
  revenue_govt_grants: number;
  revenue_program_services: number;
  revenue_investments: number;
  revenue_special_events: number;
  revenue_sales: number;
  revenue_other: number;
  revenue_total: number;
  affiliate_net_payments: number;
  expense_program_services: number;
  expense_administration: number;
  expense_fundraising: number;
  expenses_total: number;
  net_gain_loss: number;
  expense_accounting: number;
  expense_advertising_promotion: number;
  expense_info_technology: number;
  expense_insurance: number;
  expense_interest: number;
  expense_investment_management: number;
  expense_legal: number;
  expense_pension_plan: number;
  expense_publications: number;
  expense_profesional_fundraising: number;
  assets_total: number;
  unrestricted_net_assets: number;
  net_fixed_assets_LBE: number;
  net_assets_end_of_year: number;
  other_expense: number;
  notes_payable_mortgages: number;
  liabilities_total: number;
  months_of_cash: string;
  part_8_revenue: PremierPart8Revenue;
  part_9_expenses: PremierPart9Expenses;
  part_10_balance_sheet: PremierPart10BalanceSheet;

  constructor(
    _period_begin: string,
    _period_end: string,
    _membership_dues: number,
    _revenue_contributions: number,
    _revenue_govt_grants: number,
    _revenue_program_services: number,
    _revenue_investments: number,
    _revenue_special_events: number,
    _revenue_sales: number,
    _revenue_other: number,
    _revenue_total: number,
    _affiliate_net_payments: number,
    _expense_program_services: number,
    _expense_administration: number,
    _expense_fundraising: number,
    _expenses_total: number,
    _net_gain_loss: number,
    _expense_accounting: number,
    _expense_advertising_promotion: number,
    _expense_info_technology: number,
    _expense_insurance: number,
    _expense_interest: number,
    _expense_investment_management: number,
    _expense_legal: number,
    _expense_pension_plan: number,
    _expense_publications: number,
    _expense_profesional_fundraising: number,
    _assets_total: number,
    _unrestricted_net_assets: number,
    _net_fixed_assets_LBE: number,
    _net_assets_end_of_year: number,
    _other_expense: number,
    _notes_payable_mortgages: number,
    _liabilities_total: number,
    _months_of_cash: string,
    _part_8_revenue: PremierPart8Revenue,
    _part_9_expenses: PremierPart9Expenses,
    _part_10_balance_sheet: PremierPart10BalanceSheet
  ) {
    this.period_begin = _period_begin;
    this.period_end = _period_end;
    this.membership_dues = _membership_dues;
    this.revenue_contributions = _revenue_contributions;
    this.revenue_govt_grants = _revenue_govt_grants;
    this.revenue_program_services = _revenue_program_services;
    this.revenue_investments = _revenue_investments;
    this.revenue_special_events = _revenue_special_events;
    this.revenue_sales = _revenue_sales;
    this.revenue_other = _revenue_other;
    this.revenue_total = _revenue_total;
    this.affiliate_net_payments = _affiliate_net_payments;
    this.expense_program_services = _expense_program_services;
    this.expense_administration = _expense_administration;
    this.expense_fundraising = _expense_fundraising;
    this.expenses_total = _expenses_total;
    this.net_gain_loss = _net_gain_loss;
    this.expense_accounting = _expense_accounting;
    this.expense_advertising_promotion = _expense_advertising_promotion;
    this.expense_info_technology = _expense_info_technology;
    this.expense_insurance = _expense_insurance;
    this.expense_interest = _expense_interest;
    this.expense_investment_management = _expense_investment_management;
    this.expense_legal = _expense_legal;
    this.expense_pension_plan = _expense_pension_plan;
    this.expense_publications = _expense_publications;
    this.expense_profesional_fundraising = _expense_profesional_fundraising;
    this.assets_total = _assets_total;
    this.unrestricted_net_assets = _unrestricted_net_assets;
    this.net_fixed_assets_LBE = _net_fixed_assets_LBE;
    this.net_assets_end_of_year = _net_assets_end_of_year;
    this.other_expense = _other_expense;
    this.notes_payable_mortgages = _notes_payable_mortgages;
    this.liabilities_total = _liabilities_total;
    this.months_of_cash = _months_of_cash;
    this.part_8_revenue = _part_8_revenue;
    this.part_9_expenses = _part_9_expenses;
    this.part_10_balance_sheet = _part_10_balance_sheet;
  }
}

class PremierFeedbackResponse {
  question_text: string;
  response_text: string;

  constructor(_question_text: string, _response_text: string) {
    this.question_text = _question_text;
    this.response_text = _response_text;
  }
}

class PremierFinancialDocument {
  form990_name: string;
  form990_year: string;
  form990_url: string;
  form990_source: string;

  constructor(
    _form990_name: string,
    _form990_year: string,
    _form990_url: string,
    _form990_source: string
  ) {
    this.form990_name = _form990_name;
    this.form990_year = _form990_year;
    this.form990_url = _form990_url;
    this.form990_source = _form990_source;
  }
}

class PremierFinancialStatement {
  fiscal_year_begin: string;
  fiscal_year_end: string;
  auditing_company: string;
  doc_name: string;
  document_url: string;

  constructor(
    _fiscal_year_begin: string,
    _fiscal_year_end: string,
    _auditing_company: string,
    _doc_name: string,
    _document_url: string
  ) {
    this.fiscal_year_begin = _fiscal_year_begin;
    this.fiscal_year_end = _fiscal_year_end;
    this.auditing_company = _auditing_company;
    this.doc_name = _doc_name;
    this.document_url = _document_url;
  }
}

class PremierFinancialTrendsAnalysis {
  fiscal_year: string;
  business_model_indicators: PremierBusinessModelIndicators;
  capital_structure_indicators: PremierCapitalStructureIndicators;
  key_data_checks: PremierKeyDataChecks;

  constructor(
    _fiscal_year: string,
    _business_model_indicators: PremierBusinessModelIndicators,
    _capital_structure_indicators: PremierCapitalStructureIndicators,
    _key_data_checks: PremierKeyDataChecks
  ) {
    this.fiscal_year = _fiscal_year;
    this.business_model_indicators = _business_model_indicators;
    this.capital_structure_indicators = _capital_structure_indicators;
    this.key_data_checks = _key_data_checks;
  }
}

class PremierFinancials {
  most_recent_year_financials: PremierMostRecentYearFinancials;
  f990_financials: PremierF990Financial[];
  pf990_financials: any;
  f990ez_financials: any;
  financial_trends_analysis: PremierFinancialTrendsAnalysis[];
  financial_documents: PremierFinancialDocument[];
  forms_990T: PremierForms990T[];
  funding_needs: any;
  funding_sources: PremierFundingSource[];
  financial_statements: PremierFinancialStatement[];
  annual_reports: PremierAnnualReport[];
  accounting_ratios: PremierAccountingRatio[];

  constructor(
    _most_recent_year_financials: PremierMostRecentYearFinancials,
    _f990_financials: PremierF990Financial[],
    _pf990_financials: any,
    _f990ez_financials: any,
    _financial_trends_analysis: PremierFinancialTrendsAnalysis[],
    _financial_documents: PremierFinancialDocument[],
    _forms_990T: PremierForms990T[],
    _funding_needs: any,
    _funding_sources: PremierFundingSource[],
    _financial_statements: PremierFinancialStatement[],
    _annual_reports: PremierAnnualReport[],
    _accounting_ratios: PremierAccountingRatio[]
  ) {
    this.most_recent_year_financials = _most_recent_year_financials;
    this.f990_financials = _f990_financials;
    this.pf990_financials = _pf990_financials;
    this.f990ez_financials = _f990ez_financials;
    this.financial_trends_analysis = _financial_trends_analysis;
    this.financial_documents = _financial_documents;
    this.forms_990T = _forms_990T;
    this.funding_needs = _funding_needs;
    this.funding_sources = _funding_sources;
    this.financial_statements = _financial_statements;
    this.annual_reports = _annual_reports;
    this.accounting_ratios = _accounting_ratios;
  }
}

class PremierFormerlyKnownA {
  former_name: string;
  year: string;

  constructor(_former_name: string, _year: string) {
    this.former_name = _former_name;
    this.year = _year;
  }
}

class PremierForms990T {
  form990t_name: string;
  form990t_url: string;

  constructor(_form990t_name: string, _form990t_url: string) {
    this.form990t_name = _form990t_name;
    this.form990t_url = _form990t_url;
  }
}

class PremierFullCostComponents {
  total_expenses_after_depreciation: number;
  one_month_of_savings: number;
  debt_principal_payment: number;
  fixed_asset_additions: number;
  total_full_costs_estimated: number;

  constructor(
    _total_expenses_after_depreciation: number,
    _one_month_of_savings: number,
    _debt_principal_payment: number,
    _fixed_asset_additions: number,
    _total_full_costs_estimated: number
  ) {
    this.total_expenses_after_depreciation = _total_expenses_after_depreciation;
    this.one_month_of_savings = _one_month_of_savings;
    this.debt_principal_payment = _debt_principal_payment;
    this.fixed_asset_additions = _fixed_asset_additions;
    this.total_full_costs_estimated = _total_full_costs_estimated;
  }
}

class PremierFundingSource {
  funding_source: string;
  funding_amount: string;

  constructor(_funding_source: string, _funding_amount: string) {
    this.funding_source = _funding_source;
    this.funding_amount = _funding_amount;
  }
}

class PremierHighestPaidEmployee {
  name: string;
  title: string;
  type: string[];
  compensation: number;
  related_compensation: number;
  other_compensation: number;
  hours: string;
  benefits: string;

  constructor(
    _name: string,
    _title: string,
    _type: string[],
    _compensation: number,
    _related_compensation: number,
    _other_compensation: number,
    _hours: string,
    _benefits: string
  ) {
    this.name = _name;
    this.title = _title;
    this.type = _type;
    this.compensation = _compensation;
    this.related_compensation = _related_compensation;
    this.other_compensation = _other_compensation;
    this.hours = _hours;
    this.benefits = _benefits;
  }
}

class PremierKeyDataChecks {
  data_check_errors: boolean;

  constructor(_data_check_errors: boolean) {
    this.data_check_errors = _data_check_errors;
  }
}

class PremierLettersOfDetermination {
  letter_of_determination_doc_name: string;
  letter_of_determination_url: string;

  constructor(
    _letter_of_determination_doc_name: string,
    _letter_of_determination_url: string
  ) {
    this.letter_of_determination_doc_name = _letter_of_determination_doc_name;
    this.letter_of_determination_url = _letter_of_determination_url;
  }
}

class PremierLiquidity {
  months_of_cash: number;
  months_of_cash_and_investments: number;
  months_of_estimated_liquid_unrestricted_net_assets: number;

  constructor(
    _months_of_cash: number,
    _months_of_cash_and_investments: number,
    _months_of_estimated_liquid_unrestricted_net_assets: number
  ) {
    this.months_of_cash = _months_of_cash;
    this.months_of_cash_and_investments = _months_of_cash_and_investments;
    this.months_of_estimated_liquid_unrestricted_net_assets =
      _months_of_estimated_liquid_unrestricted_net_assets;
  }
}

class PremierMostRecentYearFinancials {
  period_begin: string;
  period_end: string;
  fiscal_year: number;
  form_type: string;
  data_source: string;
  assets_total: number;
  total_liabilities: number;
  revenue_contributions: number;
  revenue_govt_grants: number;
  revenue_program_services: number;
  revenue_investments: number;
  revenue_special_events: number;
  revenue_sales: number;
  revenue_other: number;
  total_revenue: number;
  expense_administration: number;
  expense_program_services: number;
  expense_fundraising: number;
  expense_accounting: number;
  expense_advertising_promotion: number;
  expense_info_technology: number;
  expense_insurance: number;
  expense_interest: number;
  expense_investment_management: number;
  expense_legal: number;
  expense_pension_plan: number;
  expense_professional_fundraising: number;
  unrestricted_net_assets: number;
  net_fixed_assets_LBE: number;
  notes_payable_mortgages: number;
  months_of_cash: string;
  expense_professional_fees: number;
  expense_publications: number;
  expense_operating_admin: number;
  expense_gifts_grants_paid: number;
  total_expense_disbursements: number;
  expenses_total: number;
  net_gain_loss: number;
  expense_salaries_employee_benefits: number;
  cash_and_equivalent_assets: number;
  investments_us_government: number;
  investments_stock: number;
  investments_bonds: number;
  investments_other: number;
  land_buildings_equipment: number;
  other_assets: number;

  constructor(
    _period_begin: string,
    _period_end: string,
    _fiscal_year: number,
    _form_type: string,
    _data_source: string,
    _assets_total: number,
    _total_liabilities: number,
    _revenue_contributions: number,
    _revenue_govt_grants: number,
    _revenue_program_services: number,
    _revenue_investments: number,
    _revenue_special_events: number,
    _revenue_sales: number,
    _revenue_other: number,
    _total_revenue: number,
    _expense_administration: number,
    _expense_program_services: number,
    _expense_fundraising: number,
    _expense_accounting: number,
    _expense_advertising_promotion: number,
    _expense_info_technology: number,
    _expense_insurance: number,
    _expense_interest: number,
    _expense_investment_management: number,
    _expense_legal: number,
    _expense_pension_plan: number,
    _expense_professional_fundraising: number,
    _unrestricted_net_assets: number,
    _net_fixed_assets_LBE: number,
    _notes_payable_mortgages: number,
    _months_of_cash: string,
    _expense_professional_fees: number,
    _expense_publications: number,
    _expense_operating_admin: number,
    _expense_gifts_grants_paid: number,
    _total_expense_disbursements: number,
    _expenses_total: number,
    _net_gain_loss: number,
    _expense_salaries_employee_benefits: number,
    _cash_and_equivalent_assets: number,
    _investments_us_government: number,
    _investments_stock: number,
    _investments_bonds: number,
    _investments_other: number,
    _land_buildings_equipment: number,
    _other_assets: number
  ) {
    this.period_begin = _period_begin;
    this.period_end = _period_end;
    this.fiscal_year = _fiscal_year;
    this.form_type = _form_type;
    this.data_source = _data_source;
    this.assets_total = _assets_total;
    this.total_liabilities = _total_liabilities;
    this.revenue_contributions = _revenue_contributions;
    this.revenue_govt_grants = _revenue_govt_grants;
    this.revenue_program_services = _revenue_program_services;
    this.revenue_investments = _revenue_investments;
    this.revenue_special_events = _revenue_special_events;
    this.revenue_sales = _revenue_sales;
    this.revenue_other = _revenue_other;
    this.total_revenue = _total_revenue;
    this.expense_administration = _expense_administration;
    this.expense_program_services = _expense_program_services;
    this.expense_fundraising = _expense_fundraising;
    this.expense_accounting = _expense_accounting;
    this.expense_advertising_promotion = _expense_advertising_promotion;
    this.expense_info_technology = _expense_info_technology;
    this.expense_insurance = _expense_insurance;
    this.expense_interest = _expense_interest;
    this.expense_investment_management = _expense_investment_management;
    this.expense_legal = _expense_legal;
    this.expense_pension_plan = _expense_pension_plan;
    this.expense_professional_fundraising = _expense_professional_fundraising;
    this.unrestricted_net_assets = _unrestricted_net_assets;
    this.net_fixed_assets_LBE = _net_fixed_assets_LBE;
    this.notes_payable_mortgages = _notes_payable_mortgages;
    this.months_of_cash = _months_of_cash;
    this.expense_professional_fees = _expense_professional_fees;
    this.expense_publications = _expense_publications;
    this.expense_operating_admin = _expense_operating_admin;
    this.expense_gifts_grants_paid = _expense_gifts_grants_paid;
    this.total_expense_disbursements = _total_expense_disbursements;
    this.expenses_total = _expenses_total;
    this.net_gain_loss = _net_gain_loss;
    this.expense_salaries_employee_benefits =
      _expense_salaries_employee_benefits;
    this.cash_and_equivalent_assets = _cash_and_equivalent_assets;
    this.investments_us_government = _investments_us_government;
    this.investments_stock = _investments_stock;
    this.investments_bonds = _investments_bonds;
    this.investments_other = _investments_other;
    this.land_buildings_equipment = _land_buildings_equipment;
    this.other_assets = _other_assets;
  }
}

class PremierNaicsCode {
  naics_code: string;
  naics_description: string;

  constructor(_naics_code: string, _naics_description: string) {
    this.naics_code = _naics_code;
    this.naics_description = _naics_description;
  }
}

class PremierNteeCode {
  ntee_code: string;
  primary_code: string;
  primary_description: string;
  sub_code: string;
  sub_description: string;

  constructor(
    _ntee_code: string,
    _primary_code: string,
    _primary_description: string,
    _sub_code: string,
    _sub_description: string
  ) {
    this.ntee_code = _ntee_code;
    this.primary_code = _primary_code;
    this.primary_description = _primary_description;
    this.sub_code = _sub_code;
    this.sub_description = _sub_description;
  }
}

class PremierOfficersDirectorsKeyEmployee {
  name: string;
  title: string;
  type: string[];
  compensation: number;
  related_compensation: number;
  other_compensation: number;
  hours: string;
  benefits: string;

  constructor(
    _name: string,
    _title: string,
    _type: string[],
    _compensation: number,
    _related_compensation: number,
    _other_compensation: number,
    _hours: string,
    _benefits: string
  ) {
    this.name = _name;
    this.title = _title;
    this.type = _type;
    this.compensation = _compensation;
    this.related_compensation = _related_compensation;
    this.other_compensation = _other_compensation;
    this.hours = _hours;
    this.benefits = _benefits;
  }
}

class PremierOperations {
  leader_name: string;
  leader_profile: string;
  co_leader_name: string;
  co_leader_profile: string;
  no_of_employees: number;
  no_of_volunteers: number;
  organization_email: string;
  organization_details_year: number;
  officers_directors_key_employees: PremierOfficersDirectorsKeyEmployee[];
  highest_paid_employees: PremierHighestPaidEmployee[];
  employees_greater_than_100K: number;
  board_chair_name: string;
  board_chair_affiliation: string;
  board_chair_term_start: string;
  board_chair_term_end: string;
  board_co_chair_name: string;
  board_co_chair_affiliation: string;
  board_co_chair_term_start: string;
  board_co_chair_term_end: string;
  board_of_directors: PremierBoardOfDirector[];
  board_leadership_practices: PremierBoardLeadershipPractice[];
  organization_demographics: PremierOrganizationDemographics;
  demographics: PremierDemographics;
  contractors: PremierContractor[];
  blog_url: string;
  fundraising_contact_name: string;
  fundraising_contact_title: string;
  fundraising_contact_email: string;
  fundraising_contact_phone: string;
  preparer_firm_name: string;
  preparer_firm_address: string;
  preparer_firm_ein: string;
  preparer_firm_phone: string;
  senior_staff: object[];
  other_staff: PremierOtherStaff[];
  accreditations: PremierAccreditation[];

  constructor(
    _leader_name: string,
    _leader_profile: string,
    _co_leader_name: string,
    _co_leader_profile: string,
    _no_of_employees: number,
    _no_of_volunteers: number,
    _organization_email: string,
    _organization_details_year: number,
    _officers_directors_key_employees: PremierOfficersDirectorsKeyEmployee[],
    _highest_paid_employees: PremierHighestPaidEmployee[],
    _employees_greater_than_100K: number,
    _board_chair_name: string,
    _board_chair_affiliation: string,
    _board_chair_term_start: string,
    _board_chair_term_end: string,
    _board_co_chair_name: string,
    _board_co_chair_affiliation: string,
    _board_co_chair_term_start: string,
    _board_co_chair_term_end: string,
    _board_of_directors: PremierBoardOfDirector[],
    _board_leadership_practices: PremierBoardLeadershipPractice[],
    _organization_demographics: PremierOrganizationDemographics,
    _demographics: PremierDemographics,
    _contractors: PremierContractor[],
    _blog_url: string,
    _fundraising_contact_name: string,
    _fundraising_contact_title: string,
    _fundraising_contact_email: string,
    _fundraising_contact_phone: string,
    _preparer_firm_name: string,
    _preparer_firm_address: string,
    _preparer_firm_ein: string,
    _preparer_firm_phone: string,
    _senior_staff: object[],
    _other_staff: PremierOtherStaff[],
    _accreditations: PremierAccreditation[]
  ) {
    this.leader_name = _leader_name;
    this.leader_profile = _leader_profile;
    this.co_leader_name = _co_leader_name;
    this.co_leader_profile = _co_leader_profile;
    this.no_of_employees = _no_of_employees;
    this.no_of_volunteers = _no_of_volunteers;
    this.organization_email = _organization_email;
    this.organization_details_year = _organization_details_year;
    this.officers_directors_key_employees = _officers_directors_key_employees;
    this.highest_paid_employees = _highest_paid_employees;
    this.employees_greater_than_100K = _employees_greater_than_100K;
    this.board_chair_name = _board_chair_name;
    this.board_chair_affiliation = _board_chair_affiliation;
    this.board_chair_term_start = _board_chair_term_start;
    this.board_chair_term_end = _board_chair_term_end;
    this.board_co_chair_name = _board_co_chair_name;
    this.board_co_chair_affiliation = _board_co_chair_affiliation;
    this.board_co_chair_term_start = _board_co_chair_term_start;
    this.board_co_chair_term_end = _board_co_chair_term_end;
    this.board_of_directors = _board_of_directors;
    this.board_leadership_practices = _board_leadership_practices;
    this.organization_demographics = _organization_demographics;
    this.demographics = _demographics;
    this.contractors = _contractors;
    this.blog_url = _blog_url;
    this.fundraising_contact_name = _fundraising_contact_name;
    this.fundraising_contact_title = _fundraising_contact_title;
    this.fundraising_contact_email = _fundraising_contact_email;
    this.fundraising_contact_phone = _fundraising_contact_phone;
    this.preparer_firm_name = _preparer_firm_name;
    this.preparer_firm_address = _preparer_firm_address;
    this.preparer_firm_ein = _preparer_firm_ein;
    this.preparer_firm_phone = _preparer_firm_phone;
    this.senior_staff = _senior_staff;
    this.other_staff = _other_staff;
    this.accreditations = _accreditations;
  }
}

class PremierOrgDoesNotCollectFor {
  board_members: boolean;
  full_time_staff: boolean;
  part_time_staff: boolean;
  all_staff: boolean;
  senior_staff: boolean;
  executive_director: boolean;

  constructor(
    _board_members: boolean,
    _full_time_staff: boolean,
    _part_time_staff: boolean,
    _all_staff: boolean,
    _senior_staff: boolean,
    _executive_director: boolean
  ) {
    this.board_members = _board_members;
    this.full_time_staff = _full_time_staff;
    this.part_time_staff = _part_time_staff;
    this.all_staff = _all_staff;
    this.senior_staff = _senior_staff;
    this.executive_director = _executive_director;
  }
}

class PremierOrganizationDemographics {
  total_board_members: any;
  total_fulltime_staff: any;
  total_parttime_staff: any;
  total_staff: number;
  total_senior_staff: any;
  tracks_staffboardvol_retention: boolean;
  tracks_staffboard_income: boolean;
  tracks_staffboard_age: boolean;
  tracks_vendor_diversity: boolean;
  has_diversity_committee: boolean;
  has_diversity_manager: boolean;
  diversity_manager_fulltime: boolean;
  diversity_plan: boolean;
  supports_diversity_via_other_methods: boolean;
  equity_strategies: PremierEquityStrategies;
  categories: PremierCategory[];

  constructor(
    _total_board_members: any,
    _total_fulltime_staff: any,
    _total_parttime_staff: any,
    _total_staff: number,
    _total_senior_staff: any,
    _tracks_staffboardvol_retention: boolean,
    _tracks_staffboard_income: boolean,
    _tracks_staffboard_age: boolean,
    _tracks_vendor_diversity: boolean,
    _has_diversity_committee: boolean,
    _has_diversity_manager: boolean,
    _diversity_manager_fulltime: boolean,
    _diversity_plan: boolean,
    _supports_diversity_via_other_methods: boolean,
    _equity_strategies: PremierEquityStrategies,
    _categories: PremierCategory[]
  ) {
    this.total_board_members = _total_board_members;
    this.total_fulltime_staff = _total_fulltime_staff;
    this.total_parttime_staff = _total_parttime_staff;
    this.total_staff = _total_staff;
    this.total_senior_staff = _total_senior_staff;
    this.tracks_staffboardvol_retention = _tracks_staffboardvol_retention;
    this.tracks_staffboard_income = _tracks_staffboard_income;
    this.tracks_staffboard_age = _tracks_staffboard_age;
    this.tracks_vendor_diversity = _tracks_vendor_diversity;
    this.has_diversity_committee = _has_diversity_committee;
    this.has_diversity_manager = _has_diversity_manager;
    this.diversity_manager_fulltime = _diversity_manager_fulltime;
    this.diversity_plan = _diversity_plan;
    this.supports_diversity_via_other_methods =
      _supports_diversity_via_other_methods;
    this.equity_strategies = _equity_strategies;
    this.categories = _categories;
  }
}

class PremierOrganizationType {
  organization_type: string;
  deductibility_limitation: string;
  deductibility_status_description: string;

  constructor(
    _organization_type: string,
    _deductibility_limitation: string,
    _deductibility_status_description: string
  ) {
    this.organization_type = _organization_type;
    this.deductibility_limitation = _deductibility_limitation;
    this.deductibility_status_description = _deductibility_status_description;
  }
}

class PremierOtherDocument {
  document_name: string;
  document_year: string;
  otherdocument_contents: string;
  document_url: string;

  constructor(
    _document_name: string,
    _document_year: string,
    _otherdocument_contents: string,
    _document_url: string
  ) {
    this.document_name = _document_name;
    this.document_year = _document_year;
    this.otherdocument_contents = _otherdocument_contents;
    this.document_url = _document_url;
  }
}

class PremierOtherStaff {
  name: string;
  title: string;
  type: string;

  constructor(_name: string, _title: string, _type: string) {
    this.name = _name;
    this.title = _title;
    this.type = _type;
  }
}

class PremierPart10BalanceSheet {
  cash_boy: number;
  cash_eoy: number;
  savings_boy: number;
  savings_eoy: number;
  pledges_grants_boy: number;
  pledges_grants_eoy: number;
  accounts_receivable_boy: number;
  accounts_receivable_eoy: number;
  qualified_receivable_boy: number;
  qualified_receivable_eoy: number;
  disqualified_receivable_boy: number;
  disqualified_receivable_eoy: number;
  loans_receivable_boy: number;
  loans_receivable_eoy: number;
  inventory_boy: number;
  inventory_eoy: number;
  prepaid_boy: number;
  prepaid_eoy: number;
  lbe_base: number;
  less_depreciation: number;
  lbe_boy: number;
  lbe_eoy: number;
  public_securities_boy: number;
  public_securities_eoy: number;
  other_securities_boy: number;
  other_securities_eoy: number;
  investment_programs_boy: number;
  investment_programs_eoy: number;
  intangible_assets_boy: number;
  intangible_assets_eoy: number;
  other_assets_boy: number;
  other_assets_eoy: number;
  assets_total_boy: number;
  assets_total_eoy: number;
  accounts_payable_boy: number;
  accounts_payable_eoy: number;
  grants_payable_boy: number;
  grants_payable_eoy: number;
  deferred_revenue_boy: number;
  deferred_revenue_eoy: number;
  tax_exempt_bonds_boy: number;
  tax_exempt_bonds_eoy: number;
  escrow_liability_boy: number;
  escrow_liability_eoy: number;
  payable_officiers_boy: number;
  payable_officiers_eoy: number;
  secured_notes_payable_boy: number;
  secured_notes_payable_eoy: number;
  unsecured_notes_payable_boy: number;
  unsecured_notes_payable_eoy: number;
  liability_other_boy: number;
  liability_other_eoy: number;
  liability_total_boy: number;
  liability_total_eoy: number;
  unrestricted_boy: number;
  unrestricted_eoy: number;
  temporarily_restricted_boy: number;
  temporarily_restricted_eoy: number;
  permanently_restricted_boy: number;
  permanently_restricted_eoy: number;
  restricted_boy: number;
  restricted_eoy: number;
  capital_boy: number;
  capital_eoy: number;
  paid_in_boy: number;
  paid_in_eoy: number;
  retained_boy: number;
  retained_eoy: number;
  net_total_boy: number;
  net_total_eoy: number;
  balances_boy: number;
  balances_eoy: number;

  constructor(
    _cash_boy: number,
    _cash_eoy: number,
    _savings_boy: number,
    _savings_eoy: number,
    _pledges_grants_boy: number,
    _pledges_grants_eoy: number,
    _accounts_receivable_boy: number,
    _accounts_receivable_eoy: number,
    _qualified_receivable_boy: number,
    _qualified_receivable_eoy: number,
    _disqualified_receivable_boy: number,
    _disqualified_receivable_eoy: number,
    _loans_receivable_boy: number,
    _loans_receivable_eoy: number,
    _inventory_boy: number,
    _inventory_eoy: number,
    _prepaid_boy: number,
    _prepaid_eoy: number,
    _lbe_base: number,
    _less_depreciation: number,
    _lbe_boy: number,
    _lbe_eoy: number,
    _public_securities_boy: number,
    _public_securities_eoy: number,
    _other_securities_boy: number,
    _other_securities_eoy: number,
    _investment_programs_boy: number,
    _investment_programs_eoy: number,
    _intangible_assets_boy: number,
    _intangible_assets_eoy: number,
    _other_assets_boy: number,
    _other_assets_eoy: number,
    _assets_total_boy: number,
    _assets_total_eoy: number,
    _accounts_payable_boy: number,
    _accounts_payable_eoy: number,
    _grants_payable_boy: number,
    _grants_payable_eoy: number,
    _deferred_revenue_boy: number,
    _deferred_revenue_eoy: number,
    _tax_exempt_bonds_boy: number,
    _tax_exempt_bonds_eoy: number,
    _escrow_liability_boy: number,
    _escrow_liability_eoy: number,
    _payable_officiers_boy: number,
    _payable_officiers_eoy: number,
    _secured_notes_payable_boy: number,
    _secured_notes_payable_eoy: number,
    _unsecured_notes_payable_boy: number,
    _unsecured_notes_payable_eoy: number,
    _liability_other_boy: number,
    _liability_other_eoy: number,
    _liability_total_boy: number,
    _liability_total_eoy: number,
    _unrestricted_boy: number,
    _unrestricted_eoy: number,
    _temporarily_restricted_boy: number,
    _temporarily_restricted_eoy: number,
    _permanently_restricted_boy: number,
    _permanently_restricted_eoy: number,
    _restricted_boy: number,
    _restricted_eoy: number,
    _capital_boy: number,
    _capital_eoy: number,
    _paid_in_boy: number,
    _paid_in_eoy: number,
    _retained_boy: number,
    _retained_eoy: number,
    _net_total_boy: number,
    _net_total_eoy: number,
    _balances_boy: number,
    _balances_eoy: number
  ) {
    this.cash_boy = _cash_boy;
    this.cash_eoy = _cash_eoy;
    this.savings_boy = _savings_boy;
    this.savings_eoy = _savings_eoy;
    this.pledges_grants_boy = _pledges_grants_boy;
    this.pledges_grants_eoy = _pledges_grants_eoy;
    this.accounts_receivable_boy = _accounts_receivable_boy;
    this.accounts_receivable_eoy = _accounts_receivable_eoy;
    this.qualified_receivable_boy = _qualified_receivable_boy;
    this.qualified_receivable_eoy = _qualified_receivable_eoy;
    this.disqualified_receivable_boy = _disqualified_receivable_boy;
    this.disqualified_receivable_eoy = _disqualified_receivable_eoy;
    this.loans_receivable_boy = _loans_receivable_boy;
    this.loans_receivable_eoy = _loans_receivable_eoy;
    this.inventory_boy = _inventory_boy;
    this.inventory_eoy = _inventory_eoy;
    this.prepaid_boy = _prepaid_boy;
    this.prepaid_eoy = _prepaid_eoy;
    this.lbe_base = _lbe_base;
    this.less_depreciation = _less_depreciation;
    this.lbe_boy = _lbe_boy;
    this.lbe_eoy = _lbe_eoy;
    this.public_securities_boy = _public_securities_boy;
    this.public_securities_eoy = _public_securities_eoy;
    this.other_securities_boy = _other_securities_boy;
    this.other_securities_eoy = _other_securities_eoy;
    this.investment_programs_boy = _investment_programs_boy;
    this.investment_programs_eoy = _investment_programs_eoy;
    this.intangible_assets_boy = _intangible_assets_boy;
    this.intangible_assets_eoy = _intangible_assets_eoy;
    this.other_assets_boy = _other_assets_boy;
    this.other_assets_eoy = _other_assets_eoy;
    this.assets_total_boy = _assets_total_boy;
    this.assets_total_eoy = _assets_total_eoy;
    this.accounts_payable_boy = _accounts_payable_boy;
    this.accounts_payable_eoy = _accounts_payable_eoy;
    this.grants_payable_boy = _grants_payable_boy;
    this.grants_payable_eoy = _grants_payable_eoy;
    this.deferred_revenue_boy = _deferred_revenue_boy;
    this.deferred_revenue_eoy = _deferred_revenue_eoy;
    this.tax_exempt_bonds_boy = _tax_exempt_bonds_boy;
    this.tax_exempt_bonds_eoy = _tax_exempt_bonds_eoy;
    this.escrow_liability_boy = _escrow_liability_boy;
    this.escrow_liability_eoy = _escrow_liability_eoy;
    this.payable_officiers_boy = _payable_officiers_boy;
    this.payable_officiers_eoy = _payable_officiers_eoy;
    this.secured_notes_payable_boy = _secured_notes_payable_boy;
    this.secured_notes_payable_eoy = _secured_notes_payable_eoy;
    this.unsecured_notes_payable_boy = _unsecured_notes_payable_boy;
    this.unsecured_notes_payable_eoy = _unsecured_notes_payable_eoy;
    this.liability_other_boy = _liability_other_boy;
    this.liability_other_eoy = _liability_other_eoy;
    this.liability_total_boy = _liability_total_boy;
    this.liability_total_eoy = _liability_total_eoy;
    this.unrestricted_boy = _unrestricted_boy;
    this.unrestricted_eoy = _unrestricted_eoy;
    this.temporarily_restricted_boy = _temporarily_restricted_boy;
    this.temporarily_restricted_eoy = _temporarily_restricted_eoy;
    this.permanently_restricted_boy = _permanently_restricted_boy;
    this.permanently_restricted_eoy = _permanently_restricted_eoy;
    this.restricted_boy = _restricted_boy;
    this.restricted_eoy = _restricted_eoy;
    this.capital_boy = _capital_boy;
    this.capital_eoy = _capital_eoy;
    this.paid_in_boy = _paid_in_boy;
    this.paid_in_eoy = _paid_in_eoy;
    this.retained_boy = _retained_boy;
    this.retained_eoy = _retained_eoy;
    this.net_total_boy = _net_total_boy;
    this.net_total_eoy = _net_total_eoy;
    this.balances_boy = _balances_boy;
    this.balances_eoy = _balances_eoy;
  }
}

class PremierPart8Revenue {
  federated_campaigns: number;
  membership_dues: number;
  fundraising_events: number;
  related_orgs: number;
  government_grants: number;
  contributions_other: number;
  contributions_noncash: number;
  contributions_all: number;
  service_revenue: number;
  income_investment: number;
  income_bonds: number;
  royalties: number;
  rents_real: number;
  rents_personal: number;
  rent_expenses_real: number;
  rent_expenses_personal: number;
  rent_income_real: number;
  rent_income_personal: number;
  net_rental: number;
  gross_securities: number;
  gross_other: number;
  cost_securities: number;
  cost_other: number;
  gain_securities: number;
  gain_other: number;
  net_sales: number;
  contributions: number;
  gross_special: number;
  direct_expenses: number;
  net_special: number;
  gaming_income: number;
  gaming_expenses: number;
  gaming_net: number;
  gross_sales: number;
  cost_goods: number;
  gross_profit: number;
  revenue_other: number;
  revenue_total: number;
  service_description_a: string;
  service_code_a: number;
  service_description_b: string;
  service_amount_a: number;
  service_code_b: number;
  service_amount_b: number;
  service_description_c: string;
  service_code_c: number;
  service_amount_c: number;
  service_description_d: string;
  service_code_d: number;
  service_amount_d: number;
  service_description_e: string;
  service_code_e: number;
  service_amount_e: number;
  service_description_f: string;
  service_code_f: number;
  service_amount_f: number;

  constructor(
    _federated_campaigns: number,
    _membership_dues: number,
    _fundraising_events: number,
    _related_orgs: number,
    _government_grants: number,
    _contributions_other: number,
    _contributions_noncash: number,
    _contributions_all: number,
    _service_revenue: number,
    _income_investment: number,
    _income_bonds: number,
    _royalties: number,
    _rents_real: number,
    _rents_personal: number,
    _rent_expenses_real: number,
    _rent_expenses_personal: number,
    _rent_income_real: number,
    _rent_income_personal: number,
    _net_rental: number,
    _gross_securities: number,
    _gross_other: number,
    _cost_securities: number,
    _cost_other: number,
    _gain_securities: number,
    _gain_other: number,
    _net_sales: number,
    _contributions: number,
    _gross_special: number,
    _direct_expenses: number,
    _net_special: number,
    _gaming_income: number,
    _gaming_expenses: number,
    _gaming_net: number,
    _gross_sales: number,
    _cost_goods: number,
    _gross_profit: number,
    _revenue_other: number,
    _revenue_total: number,
    _service_description_a: string,
    _service_code_a: number,
    _service_description_b: string,
    _service_amount_a: number,
    _service_code_b: number,
    _service_amount_b: number,
    _service_description_c: string,
    _service_code_c: number,
    _service_amount_c: number,
    _service_description_d: string,
    _service_code_d: number,
    _service_amount_d: number,
    _service_description_e: string,
    _service_code_e: number,
    _service_amount_e: number,
    _service_description_f: string,
    _service_code_f: number,
    _service_amount_f: number
  ) {
    this.federated_campaigns = _federated_campaigns;
    this.membership_dues = _membership_dues;
    this.fundraising_events = _fundraising_events;
    this.related_orgs = _related_orgs;
    this.government_grants = _government_grants;
    this.contributions_other = _contributions_other;
    this.contributions_noncash = _contributions_noncash;
    this.contributions_all = _contributions_all;
    this.service_revenue = _service_revenue;
    this.income_investment = _income_investment;
    this.income_bonds = _income_bonds;
    this.royalties = _royalties;
    this.rents_real = _rents_real;
    this.rents_personal = _rents_personal;
    this.rent_expenses_real = _rent_expenses_real;
    this.rent_expenses_personal = _rent_expenses_personal;
    this.rent_income_real = _rent_income_real;
    this.rent_income_personal = _rent_income_personal;
    this.net_rental = _net_rental;
    this.gross_securities = _gross_securities;
    this.gross_other = _gross_other;
    this.cost_securities = _cost_securities;
    this.cost_other = _cost_other;
    this.gain_securities = _gain_securities;
    this.gain_other = _gain_other;
    this.net_sales = _net_sales;
    this.contributions = _contributions;
    this.gross_special = _gross_special;
    this.direct_expenses = _direct_expenses;
    this.net_special = _net_special;
    this.gaming_income = _gaming_income;
    this.gaming_expenses = _gaming_expenses;
    this.gaming_net = _gaming_net;
    this.gross_sales = _gross_sales;
    this.cost_goods = _cost_goods;
    this.gross_profit = _gross_profit;
    this.revenue_other = _revenue_other;
    this.revenue_total = _revenue_total;
    this.service_description_a = _service_description_a;
    this.service_code_a = _service_code_a;
    this.service_description_b = _service_description_b;
    this.service_amount_a = _service_amount_a;
    this.service_code_b = _service_code_b;
    this.service_amount_b = _service_amount_b;
    this.service_description_c = _service_description_c;
    this.service_code_c = _service_code_c;
    this.service_amount_c = _service_amount_c;
    this.service_description_d = _service_description_d;
    this.service_code_d = _service_code_d;
    this.service_amount_d = _service_amount_d;
    this.service_description_e = _service_description_e;
    this.service_code_e = _service_code_e;
    this.service_amount_e = _service_amount_e;
    this.service_description_f = _service_description_f;
    this.service_code_f = _service_code_f;
    this.service_amount_f = _service_amount_f;
  }
}

class PremierPart9Expenses {
  grants_orgs_us: number;
  grants_individuals_us: number;
  grants_orgs_non_us: number;
  benefits_total: number;
  compensation_current: number;
  compensation_disqualified: number;
  wages_total: number;
  pension_total: number;
  employee_benefits_total: number;
  payroll_tax_total: number;
  fees_management: number;
  fees_legal: number;
  accounting_fees_total: number;
  fees_lobbying: number;
  fundraising_total: number;
  fees_investments: number;
  fees_other: number;
  ads_promo: number;
  office: number;
  information_technology: number;
  expense_royalties: number;
  occupancy_total: number;
  travel_total: number;
  entertain_officials: number;
  meetings_total: number;
  interest_total: number;
  payments: number;
  depreciation_total: number;
  insurance: number;
  expense_a_total: number;
  expense_b_total: number;
  expense_c_total: number;
  expense_d_total: number;
  expense_e_total: number;
  expenses_total: number;
  total_program_services: number;
  total_management: number;
  total_fundraising: number;
  expense_joint_total: number;
  joint_services: number;
  joint_general: number;
  joint_fundraising: number;
  all_other_expenses: number;
  expense_a_description: string;
  expense_b_description: string;
  expense_c_description: string;
  expense_d_description: string;

  constructor(
    _grants_orgs_us: number,
    _grants_individuals_us: number,
    _grants_orgs_non_us: number,
    _benefits_total: number,
    _compensation_current: number,
    _compensation_disqualified: number,
    _wages_total: number,
    _pension_total: number,
    _employee_benefits_total: number,
    _payroll_tax_total: number,
    _fees_management: number,
    _fees_legal: number,
    _accounting_fees_total: number,
    _fees_lobbying: number,
    _fundraising_total: number,
    _fees_investments: number,
    _fees_other: number,
    _ads_promo: number,
    _office: number,
    _information_technology: number,
    _expense_royalties: number,
    _occupancy_total: number,
    _travel_total: number,
    _entertain_officials: number,
    _meetings_total: number,
    _interest_total: number,
    _payments: number,
    _depreciation_total: number,
    _insurance: number,
    _expense_a_total: number,
    _expense_b_total: number,
    _expense_c_total: number,
    _expense_d_total: number,
    _expense_e_total: number,
    _expenses_total: number,
    _total_program_services: number,
    _total_management: number,
    _total_fundraising: number,
    _expense_joint_total: number,
    _joint_services: number,
    _joint_general: number,
    _joint_fundraising: number,
    _all_other_expenses: number,
    _expense_a_description: string,
    _expense_b_description: string,
    _expense_c_description: string,
    _expense_d_description: string
  ) {
    this.grants_orgs_us = _grants_orgs_us;
    this.grants_individuals_us = _grants_individuals_us;
    this.grants_orgs_non_us = _grants_orgs_non_us;
    this.benefits_total = _benefits_total;
    this.compensation_current = _compensation_current;
    this.compensation_disqualified = _compensation_disqualified;
    this.wages_total = _wages_total;
    this.pension_total = _pension_total;
    this.employee_benefits_total = _employee_benefits_total;
    this.payroll_tax_total = _payroll_tax_total;
    this.fees_management = _fees_management;
    this.fees_legal = _fees_legal;
    this.accounting_fees_total = _accounting_fees_total;
    this.fees_lobbying = _fees_lobbying;
    this.fundraising_total = _fundraising_total;
    this.fees_investments = _fees_investments;
    this.fees_other = _fees_other;
    this.ads_promo = _ads_promo;
    this.office = _office;
    this.information_technology = _information_technology;
    this.expense_royalties = _expense_royalties;
    this.occupancy_total = _occupancy_total;
    this.travel_total = _travel_total;
    this.entertain_officials = _entertain_officials;
    this.meetings_total = _meetings_total;
    this.interest_total = _interest_total;
    this.payments = _payments;
    this.depreciation_total = _depreciation_total;
    this.insurance = _insurance;
    this.expense_a_total = _expense_a_total;
    this.expense_b_total = _expense_b_total;
    this.expense_c_total = _expense_c_total;
    this.expense_d_total = _expense_d_total;
    this.expense_e_total = _expense_e_total;
    this.expenses_total = _expenses_total;
    this.total_program_services = _total_program_services;
    this.total_management = _total_management;
    this.total_fundraising = _total_fundraising;
    this.expense_joint_total = _expense_joint_total;
    this.joint_services = _joint_services;
    this.joint_general = _joint_general;
    this.joint_fundraising = _joint_fundraising;
    this.all_other_expenses = _all_other_expenses;
    this.expense_a_description = _expense_a_description;
    this.expense_b_description = _expense_b_description;
    this.expense_c_description = _expense_c_description;
    this.expense_d_description = _expense_d_description;
  }
}

class PremierPcsCode {
  pcs_facet: string;
  pcs_code: string;
  pcs_description: string;
  pcs_parent_code: string;
  pcs_parent_description: string;

  constructor(
    _pcs_facet: string,
    _pcs_code: string,
    _pcs_description: string,
    _pcs_parent_code: string,
    _pcs_parent_description: string
  ) {
    this.pcs_facet = _pcs_facet;
    this.pcs_code = _pcs_code;
    this.pcs_description = _pcs_description;
    this.pcs_parent_code = _pcs_parent_code;
    this.pcs_parent_description = _pcs_parent_description;
  }
}

class PremierPhoto {
  picture_url: string;
  caption: string;

  constructor(_picture_url: string, _caption: string) {
    this.picture_url = _picture_url;
    this.caption = _caption;
  }
}

class PremierPlatinumEvaluationDocument {
  document_name: string;
  document_year: string;
  document_url: string;
  document_type: string;

  constructor(
    _document_name: string,
    _document_year: string,
    _document_url: string,
    _document_type: string
  ) {
    this.document_name = _document_name;
    this.document_year = _document_year;
    this.document_url = _document_url;
    this.document_type = _document_type;
  }
}

class PremierProfileDataChangeDates {
  primary_address_last_modified: string;
  payment_address_last_modified: string;
  primary_contact_email_last_modified: string;
  fundraising_contact_email_last_modified: string;
  org_website_last_modified: string;
  seal_last_modified: string;
  dei_last_modified: string;

  constructor(
    _primary_address_last_modified: string,
    _payment_address_last_modified: string,
    _primary_contact_email_last_modified: string,
    _fundraising_contact_email_last_modified: string,
    _org_website_last_modified: string,
    _seal_last_modified: string,
    _dei_last_modified: string
  ) {
    this.primary_address_last_modified = _primary_address_last_modified;
    this.payment_address_last_modified = _payment_address_last_modified;
    this.primary_contact_email_last_modified =
      _primary_contact_email_last_modified;
    this.fundraising_contact_email_last_modified =
      _fundraising_contact_email_last_modified;
    this.org_website_last_modified = _org_website_last_modified;
    this.seal_last_modified = _seal_last_modified;
    this.dei_last_modified = _dei_last_modified;
  }
}

class PremierProfileSdgCode {
  id: number;
  description: string;

  constructor(_id: number, _description: string) {
    this.id = _id;
    this.description = _description;
  }
}

class PremierProfitability {
  surplus_as_percent_of_expenses_before_depreciation: string;
  surplus_as_percent_of_expenses_after_depreciation: string;

  constructor(
    _surplus_as_percent_of_expenses_before_depreciation: string,
    _surplus_as_percent_of_expenses_after_depreciation: string
  ) {
    this.surplus_as_percent_of_expenses_before_depreciation =
      _surplus_as_percent_of_expenses_before_depreciation;
    this.surplus_as_percent_of_expenses_after_depreciation =
      _surplus_as_percent_of_expenses_after_depreciation;
  }
}

class PremierProgram {
  name: string;
  description: string;
  target_population: string;
  target_population2: string;
  budget: string;
  areas_served: string[];

  constructor(
    _name: string,
    _description: string,
    _target_population: string,
    _target_population2: string,
    _budget: string,
    _areas_served: string[]
  ) {
    this.name = _name;
    this.description = _description;
    this.target_population = _target_population;
    this.target_population2 = _target_population2;
    this.budget = _budget;
    this.areas_served = _areas_served;
  }
}

class PremierProgramPlatinumMetric {
  metric: string;
  years: PremierYear[];
  target_population_served: object[];
  type_of_metric: string;
  direction_of_success: string;

  constructor(
    _metric: string,
    _years: PremierYear[],
    _target_population_served: object[],
    _type_of_metric: string,
    _direction_of_success: string
  ) {
    this.metric = _metric;
    this.years = _years;
    this.target_population_served = _target_population_served;
    this.type_of_metric = _type_of_metric;
    this.direction_of_success = _direction_of_success;
  }
}

class PremierPrograms {
  programs: PremierProgram[];
  platinum_metrics: PremierProgramPlatinumMetric[];
  charting_impact_answers: PremierChartingImpactAnswer[];

  constructor(
    _programs: PremierProgram[],
    _platinum_metrics: PremierProgramPlatinumMetric[],
    _charting_impact_answers: PremierChartingImpactAnswer[]
  ) {
    this.programs = _programs;
    this.platinum_metrics = _platinum_metrics;
    this.charting_impact_answers = _charting_impact_answers;
  }
}

class PremierResponse {
  code: number;
  message: string;
  took: number;
  errors: object[];
  data: PremierData;

  constructor(
    _code: number,
    _message: string,
    _took: number,
    _errors: object[],
    _data: PremierData
  ) {
    this.code = _code;
    this.message = _message;
    this.took = _took;
    this.errors = _errors;
    this.data = _data;
  }
}

class PremierRevenueComposition {
  total_revenue_unrestricted_and_restricted: number;
  total_revenue_percent_change_over_prior_year: string;
  total_revenue_prior: number;
  program_svcs_revenue: string;
  membership_dues: string;
  investment_income: string;
  government_grants: string;
  other_grants_contributions: string;
  other_revenue: string;

  constructor(
    _total_revenue_unrestricted_and_restricted: number,
    _total_revenue_percent_change_over_prior_year: string,
    _total_revenue_prior: number,
    _program_svcs_revenue: string,
    _membership_dues: string,
    _investment_income: string,
    _government_grants: string,
    _other_grants_contributions: string,
    _other_revenue: string
  ) {
    this.total_revenue_unrestricted_and_restricted =
      _total_revenue_unrestricted_and_restricted;
    this.total_revenue_percent_change_over_prior_year =
      _total_revenue_percent_change_over_prior_year;
    this.total_revenue_prior = _total_revenue_prior;
    this.program_svcs_revenue = _program_svcs_revenue;
    this.membership_dues = _membership_dues;
    this.investment_income = _investment_income;
    this.government_grants = _government_grants;
    this.other_grants_contributions = _other_grants_contributions;
    this.other_revenue = _other_revenue;
  }
}

class PremierSdg {
  id: number;
  description: string;

  constructor(_id: number, _description: string) {
    this.id = _id;
    this.description = _description;
  }
}

class PremierSicCode {
  sic_code: string;
  sic_description: string;

  constructor(_sic_code: string, _sic_description: string) {
    this.sic_code = _sic_code;
    this.sic_description = _sic_description;
  }
}

class PremierStaffLevel {
  staff_level: string;
  count: any;

  constructor(_staff_level: string, _count: any) {
    this.staff_level = _staff_level;
    this.count = _count;
  }
}

class PremierStaffLevelTotals {
  total_board_members: string;
  total_staff: string;
  total_senior_staff: string;

  constructor(
    _total_board_members: string,
    _total_staff: string,
    _total_senior_staff: string
  ) {
    this.total_board_members = _total_board_members;
    this.total_staff = _total_staff;
    this.total_senior_staff = _total_senior_staff;
  }
}

class PremierSubcategory {
  subcategory: string;
  staff_levels: PremierStaffLevel[];
  board_members: number;
  staff: number;
  senior_staff: number;
  reported_by_ceo: boolean;
  reported_by_coceo: any;

  constructor(
    _subcategory: string,
    _staff_levels: PremierStaffLevel[],
    _board_members: number,
    _staff: number,
    _senior_staff: number,
    _reported_by_ceo: boolean,
    _reported_by_coceo: any
  ) {
    this.subcategory = _subcategory;
    this.staff_levels = _staff_levels;
    this.board_members = _board_members;
    this.staff = _staff;
    this.senior_staff = _senior_staff;
    this.reported_by_ceo = _reported_by_ceo;
    this.reported_by_coceo = _reported_by_coceo;
  }
}

class PremierSummary {
  organization_id: number;
  organization_name: string;
  ein: string;
  bridge_id: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  zip: string;
  county: string;
  latitude: string;
  longitude: string;
  fax: string;
  govt_registered_name: string;
  also_known_as: string;
  fiscal_year_end: string;
  fiscal_year_start: string;
  affiliation_code: string;
  affiliation_description: string;
  contact_name: string;
  contact_title: string;
  contact_email: string;
  contact_phone: string;
  contact_fax: string;
  gs_profile_update_level: string;
  gs_profile_update_level_logo: string;
  deductibility_code: string;
  deductibility_description: string;
  donation_to_ein: string;
  donation_to_name: string;
  areas_served_narrative: string;
  ruling_year: string;
  gs_public_report: string;
  gs_pro_pdf: string;
  gs_financial_trends_analysis_pdf: string;
  impact_statement: string;
  subsection_code: string;
  subsection_description: string;
  keywords: string;
  logo_url: string;
  mission: string;
  demographics_status: string;
  ntee_code: string;
  sdg: PremierSdg;
  website_url: string;
  year_founded: string;
  year_incorporated: string;
  first_on_bmf_date: string;
  last_on_bmf_date: string;
  profile_data_change_dates: PremierProfileDataChangeDates;
  addresses: PremierAddress[];
  affiliations: any;
  awards: any;
  formerly_known_as: PremierFormerlyKnownA[];
  forms_1023_1024: any;
  letters_of_determination: PremierLettersOfDetermination[];
  letters_of_dissolution: any;
  ntee_codes: PremierNteeCode[];
  naics_code: PremierNaicsCode;
  sic_codes: PremierSicCode[];
  platinum_evaluation_documents: PremierPlatinumEvaluationDocument[];
  other_documents: PremierOtherDocument[];
  photos: PremierPhoto[];
  social_media_urls: string[];
  telephone_numbers: PremierTelephoneNumber[];
  videos: PremierVideo[];
  org_collect_feedback: boolean;
  org_feedback_example: string;
  org_quiz_interest: boolean;
  org_learn_more: boolean;
  feedback_responses: PremierFeedbackResponse[];
  pcs_codes: PremierPcsCode[];
  profile_sdg_codes: PremierProfileSdgCode[];
  is_national_hq: boolean;
  is_non_bmf_org: boolean;

  constructor(
    _organization_id: number,
    _organization_name: string,
    _ein: string,
    _bridge_id: string,
    _address_line_1: string,
    _address_line_2: string,
    _city: string,
    _state: string,
    _zip: string,
    _county: string,
    _latitude: string,
    _longitude: string,
    _fax: string,
    _govt_registered_name: string,
    _also_known_as: string,
    _fiscal_year_end: string,
    _fiscal_year_start: string,
    _affiliation_code: string,
    _affiliation_description: string,
    _contact_name: string,
    _contact_title: string,
    _contact_email: string,
    _contact_phone: string,
    _contact_fax: string,
    _gs_profile_update_level: string,
    _gs_profile_update_level_logo: string,
    _deductibility_code: string,
    _deductibility_description: string,
    _donation_to_ein: string,
    _donation_to_name: string,
    _areas_served_narrative: string,
    _ruling_year: string,
    _gs_public_report: string,
    _gs_pro_pdf: string,
    _gs_financial_trends_analysis_pdf: string,
    _impact_statement: string,
    _subsection_code: string,
    _subsection_description: string,
    _keywords: string,
    _logo_url: string,
    _mission: string,
    _demographics_status: string,
    _ntee_code: string,
    _sdg: PremierSdg,
    _website_url: string,
    _year_founded: string,
    _year_incorporated: string,
    _first_on_bmf_date: string,
    _last_on_bmf_date: string,
    _profile_data_change_dates: PremierProfileDataChangeDates,
    _addresses: PremierAddress[],
    _affiliations: any,
    _awards: any,
    _formerly_known_as: PremierFormerlyKnownA[],
    _forms_1023_1024: any,
    _letters_of_determination: PremierLettersOfDetermination[],
    _letters_of_dissolution: any,
    _ntee_codes: PremierNteeCode[],
    _naics_code: PremierNaicsCode,
    _sic_codes: PremierSicCode[],
    _platinum_evaluation_documents: PremierPlatinumEvaluationDocument[],
    _other_documents: PremierOtherDocument[],
    _photos: PremierPhoto[],
    _social_media_urls: string[],
    _telephone_numbers: PremierTelephoneNumber[],
    _videos: PremierVideo[],
    _org_collect_feedback: boolean,
    _org_feedback_example: string,
    _org_quiz_interest: boolean,
    _org_learn_more: boolean,
    _feedback_responses: PremierFeedbackResponse[],
    _pcs_codes: PremierPcsCode[],
    _profile_sdg_codes: PremierProfileSdgCode[],
    _is_national_hq: boolean,
    _is_non_bmf_org: boolean
  ) {
    this.organization_id = _organization_id;
    this.organization_name = _organization_name;
    this.ein = _ein;
    this.bridge_id = _bridge_id;
    this.address_line_1 = _address_line_1;
    this.address_line_2 = _address_line_2;
    this.city = _city;
    this.state = _state;
    this.zip = _zip;
    this.county = _county;
    this.latitude = _latitude;
    this.longitude = _longitude;
    this.fax = _fax;
    this.govt_registered_name = _govt_registered_name;
    this.also_known_as = _also_known_as;
    this.fiscal_year_end = _fiscal_year_end;
    this.fiscal_year_start = _fiscal_year_start;
    this.affiliation_code = _affiliation_code;
    this.affiliation_description = _affiliation_description;
    this.contact_name = _contact_name;
    this.contact_title = _contact_title;
    this.contact_email = _contact_email;
    this.contact_phone = _contact_phone;
    this.contact_fax = _contact_fax;
    this.gs_profile_update_level = _gs_profile_update_level;
    this.gs_profile_update_level_logo = _gs_profile_update_level_logo;
    this.deductibility_code = _deductibility_code;
    this.deductibility_description = _deductibility_description;
    this.donation_to_ein = _donation_to_ein;
    this.donation_to_name = _donation_to_name;
    this.areas_served_narrative = _areas_served_narrative;
    this.ruling_year = _ruling_year;
    this.gs_public_report = _gs_public_report;
    this.gs_pro_pdf = _gs_pro_pdf;
    this.gs_financial_trends_analysis_pdf = _gs_financial_trends_analysis_pdf;
    this.impact_statement = _impact_statement;
    this.subsection_code = _subsection_code;
    this.subsection_description = _subsection_description;
    this.keywords = _keywords;
    this.logo_url = _logo_url;
    this.mission = _mission;
    this.demographics_status = _demographics_status;
    this.ntee_code = _ntee_code;
    this.sdg = _sdg;
    this.website_url = _website_url;
    this.year_founded = _year_founded;
    this.year_incorporated = _year_incorporated;
    this.first_on_bmf_date = _first_on_bmf_date;
    this.last_on_bmf_date = _last_on_bmf_date;
    this.profile_data_change_dates = _profile_data_change_dates;
    this.addresses = _addresses;
    this.affiliations = _affiliations;
    this.awards = _awards;
    this.formerly_known_as = _formerly_known_as;
    this.forms_1023_1024 = _forms_1023_1024;
    this.letters_of_determination = _letters_of_determination;
    this.letters_of_dissolution = _letters_of_dissolution;
    this.ntee_codes = _ntee_codes;
    this.naics_code = _naics_code;
    this.sic_codes = _sic_codes;
    this.platinum_evaluation_documents = _platinum_evaluation_documents;
    this.other_documents = _other_documents;
    this.photos = _photos;
    this.social_media_urls = _social_media_urls;
    this.telephone_numbers = _telephone_numbers;
    this.videos = _videos;
    this.org_collect_feedback = _org_collect_feedback;
    this.org_feedback_example = _org_feedback_example;
    this.org_quiz_interest = _org_quiz_interest;
    this.org_learn_more = _org_learn_more;
    this.feedback_responses = _feedback_responses;
    this.pcs_codes = _pcs_codes;
    this.profile_sdg_codes = _profile_sdg_codes;
    this.is_national_hq = _is_national_hq;
    this.is_non_bmf_org = _is_non_bmf_org;
  }
}

class PremierTelephoneNumber {
  telephone_number: string;
  telephone_type: string;

  constructor(_telephone_number: string, _telephone_type: string) {
    this.telephone_number = _telephone_number;
    this.telephone_type = _telephone_type;
  }
}

class PremierVideo {
  video_caption: string;
  video_url: string;

  constructor(_video_caption: string, _video_url: string) {
    this.video_caption = _video_caption;
    this.video_url = _video_url;
  }
}

class PremierYear {
  year: number;
  value: number;

  constructor(_year: number, _value: number) {
    this.year = _year;
    this.value = _value;
  }
}

class Exception {
  cause: Throwable;
  stackTrace: StackTraceElement[];
  message: string;
  suppressed: Throwable[];
  localizedMessage: string;

  constructor(
    _cause: Throwable,
    _stackTrace: StackTraceElement[],
    _message: string,
    _suppressed: Throwable[],
    _localizedMessage: string
  ) {
    this.cause = _cause;
    this.stackTrace = _stackTrace;
    this.message = _message;
    this.suppressed = _suppressed;
    this.localizedMessage = _localizedMessage;
  }
}

type Function0 = any;

type Function0Object = any;

class LongRunningTask {
  id: string;
  foundationId: string;
  task: Function0Object;
  taskStatus: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED";
  result: any;
  error: Exception;

  constructor(
    _id: string,
    _foundationId: string,
    _task: Function0Object,
    _taskStatus: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED",
    _result: any,
    _error: Exception
  ) {
    this.id = _id;
    this.foundationId = _foundationId;
    this.task = _task;
    this.taskStatus = _taskStatus;
    this.result = _result;
    this.error = _error;
  }
}

class LongRunningTaskObject {
  id: string;
  foundationId: string;
  task: Function0Object;
  taskStatus: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED";
  result: any;
  error: Exception;

  constructor(
    _id: string,
    _foundationId: string,
    _task: Function0Object,
    _taskStatus: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED",
    _result: any,
    _error: Exception
  ) {
    this.id = _id;
    this.foundationId = _foundationId;
    this.task = _task;
    this.taskStatus = _taskStatus;
    this.result = _result;
    this.error = _error;
  }
}

class StackTraceElement {
  classLoaderName: string;
  moduleName: string;
  moduleVersion: string;
  methodName: string;
  fileName: string;
  lineNumber: number;
  nativeMethod: boolean;
  className: string;

  constructor(
    _classLoaderName: string,
    _moduleName: string,
    _moduleVersion: string,
    _methodName: string,
    _fileName: string,
    _lineNumber: number,
    _nativeMethod: boolean,
    _className: string
  ) {
    this.classLoaderName = _classLoaderName;
    this.moduleName = _moduleName;
    this.moduleVersion = _moduleVersion;
    this.methodName = _methodName;
    this.fileName = _fileName;
    this.lineNumber = _lineNumber;
    this.nativeMethod = _nativeMethod;
    this.className = _className;
  }
}

class Throwable {
  cause: Throwable;
  stackTrace: StackTraceElement[];
  message: string;
  suppressed: Throwable[];
  localizedMessage: string;

  constructor(
    _cause: Throwable,
    _stackTrace: StackTraceElement[],
    _message: string,
    _suppressed: Throwable[],
    _localizedMessage: string
  ) {
    this.cause = _cause;
    this.stackTrace = _stackTrace;
    this.message = _message;
    this.suppressed = _suppressed;
    this.localizedMessage = _localizedMessage;
  }
}

class IndexRequest {
  foundationIds: string[];
  restartIndex: boolean;

  constructor(_foundationIds: string[], _restartIndex: boolean) {
    this.foundationIds = _foundationIds;
    this.restartIndex = _restartIndex;
  }
}

class NylasSyncRequest {
  startDate: string;
  userIds: string[];

  constructor(_startDate: string, _userIds: string[]) {
    this.startDate = _startDate;
    this.userIds = _userIds;
  }
}

class AnvilPDFAdditionalInfo {
  pdfKey: string;
  pdfType: "PAYMENT_INFO";
  fields: AnvilPDFField[];

  constructor(
    _pdfKey: string,
    _pdfType: "PAYMENT_INFO",
    _fields: AnvilPDFField[]
  ) {
    this.pdfKey = _pdfKey;
    this.pdfType = _pdfType;
    this.fields = _fields;
  }
}

class AnvilPDFField {
  id: string;
  displayName: string;
  type: "SHORT_TEXT" | "DATE";

  constructor(_id: string, _displayName: string, _type: "SHORT_TEXT" | "DATE") {
    this.id = _id;
    this.displayName = _displayName;
    this.type = _type;
  }
}

class Budget {
  lastUpdateById: string;
  lastUpdateByName: string;
  lastUpdatedAt: string;
  allocations: BudgetAllocation[];
  yearly: number;

  constructor(
    _lastUpdateById: string,
    _lastUpdateByName: string,
    _lastUpdatedAt: string,
    _allocations: BudgetAllocation[],
    _yearly: number
  ) {
    this.lastUpdateById = _lastUpdateById;
    this.lastUpdateByName = _lastUpdateByName;
    this.lastUpdatedAt = _lastUpdatedAt;
    this.allocations = _allocations;
    this.yearly = _yearly;
  }
}

class BudgetAllocation {
  id: string;
  name: string;
  amount: number;

  constructor(_id: string, _name: string, _amount: number) {
    this.id = _id;
    this.name = _name;
    this.amount = _amount;
  }
}

class CRMConfiguration {
  nonprofitEntityTypeMap: any;

  constructor(_nonprofitEntityTypeMap: any) {
    this.nonprofitEntityTypeMap = _nonprofitEntityTypeMap;
  }
}

class CRMConfigurationField {
  fieldType:
    | "DBA"
    | "PHONE_NUMBER"
    | "TEAM"
    | "SIGNATORY"
    | "ADDITIONAL_CONTACTS"
    | "MISSION"
    | "VISION"
    | "DESCRIPTION"
    | "EIN"
    | "FISCAL_SPONSOR"
    | "ENTITY_EMAIL"
    | "ENTITY_WEBSITE"
    | "TOTAL_AWARDED"
    | "WEBSITE"
    | "FOUNDATION_PRIMARY_CONTACT"
    | "HEADQUARTERS_ADDRESS"
    | "MAILING_ADDRESS"
    | "TAGS"
    | "FACEBOOK"
    | "TWITTER"
    | "INSTAGRAM"
    | "LINKEDIN"
    | "GUIDESTAR"
    | "LEGAL_STATUS"
    | "FOUNDING_DATE"
    | "STATUS"
    | "LOGO"
    | "IRS_DETERMINATION_LETTER"
    | "IRS_DATA"
    | "IRS_RECIPIENT_STATUS"
    | "CONFLICT_OF_INTEREST"
    | "CUSTOM";
  displayName: string;
  customCRMField: FoundationCRMField;
  crmExternalConfigProperty: CRMExternalConfigProperty;

  constructor(
    _fieldType:
      | "DBA"
      | "PHONE_NUMBER"
      | "TEAM"
      | "SIGNATORY"
      | "ADDITIONAL_CONTACTS"
      | "MISSION"
      | "VISION"
      | "DESCRIPTION"
      | "EIN"
      | "FISCAL_SPONSOR"
      | "ENTITY_EMAIL"
      | "ENTITY_WEBSITE"
      | "TOTAL_AWARDED"
      | "WEBSITE"
      | "FOUNDATION_PRIMARY_CONTACT"
      | "HEADQUARTERS_ADDRESS"
      | "MAILING_ADDRESS"
      | "TAGS"
      | "FACEBOOK"
      | "TWITTER"
      | "INSTAGRAM"
      | "LINKEDIN"
      | "GUIDESTAR"
      | "LEGAL_STATUS"
      | "FOUNDING_DATE"
      | "STATUS"
      | "LOGO"
      | "IRS_DETERMINATION_LETTER"
      | "IRS_DATA"
      | "IRS_RECIPIENT_STATUS"
      | "CONFLICT_OF_INTEREST"
      | "CUSTOM",
    _displayName: string,
    _customCRMField: FoundationCRMField,
    _crmExternalConfigProperty: CRMExternalConfigProperty
  ) {
    this.fieldType = _fieldType;
    this.displayName = _displayName;
    this.customCRMField = _customCRMField;
    this.crmExternalConfigProperty = _crmExternalConfigProperty;
  }
}

class CRMExternalConfigProperty {
  disableForExternalReviewer: boolean;

  constructor(_disableForExternalReviewer: boolean) {
    this.disableForExternalReviewer = _disableForExternalReviewer;
  }
}

class ConfigurationSettings {
  logoFile: string;
  color: string;
  landingPage: string;
  pipelines: Pipeline[];
  bannerFile: string;
  mailSettings: FoundationMailSettings;
  quickbooksSetting: FoundationQuickbooksSetting;
  replyTo: string;
  defaultPipelineName: string;
  senderEmail: string;
  crmConfiguration: CRMConfiguration;
  metabaseConfiguration: MetabaseConfiguration;
  grantTypeConfiguration: GrantTypeConfiguration;
  mailChimpConfiguration: MailChimpFoundationConfiguration;
  granteeProfileUpdateConfiguration: GranteeProfileUpdateConfiguration;
  externalReviewerConfiguration: ExternalReviewerConfiguration;
  salesforceConfiguration: FoundationSalesforceConfiguration;
  granteeMFAEnabled: boolean;
  foundationMFAEnabled: boolean;

  constructor(
    _logoFile: string,
    _color: string,
    _landingPage: string,
    _pipelines: Pipeline[],
    _bannerFile: string,
    _mailSettings: FoundationMailSettings,
    _quickbooksSetting: FoundationQuickbooksSetting,
    _replyTo: string,
    _defaultPipelineName: string,
    _senderEmail: string,
    _crmConfiguration: CRMConfiguration,
    _metabaseConfiguration: MetabaseConfiguration,
    _grantTypeConfiguration: GrantTypeConfiguration,
    _mailChimpConfiguration: MailChimpFoundationConfiguration,
    _granteeProfileUpdateConfiguration: GranteeProfileUpdateConfiguration,
    _externalReviewerConfiguration: ExternalReviewerConfiguration,
    _salesforceConfiguration: FoundationSalesforceConfiguration,
    _granteeMFAEnabled: boolean,
    _foundationMFAEnabled: boolean
  ) {
    this.logoFile = _logoFile;
    this.color = _color;
    this.landingPage = _landingPage;
    this.pipelines = _pipelines;
    this.bannerFile = _bannerFile;
    this.mailSettings = _mailSettings;
    this.quickbooksSetting = _quickbooksSetting;
    this.replyTo = _replyTo;
    this.defaultPipelineName = _defaultPipelineName;
    this.senderEmail = _senderEmail;
    this.crmConfiguration = _crmConfiguration;
    this.metabaseConfiguration = _metabaseConfiguration;
    this.grantTypeConfiguration = _grantTypeConfiguration;
    this.mailChimpConfiguration = _mailChimpConfiguration;
    this.granteeProfileUpdateConfiguration = _granteeProfileUpdateConfiguration;
    this.externalReviewerConfiguration = _externalReviewerConfiguration;
    this.salesforceConfiguration = _salesforceConfiguration;
    this.granteeMFAEnabled = _granteeMFAEnabled;
    this.foundationMFAEnabled = _foundationMFAEnabled;
  }
}

class CustomEmailTemplate {
  customEmailTemplateType:
    | "REQUEST_TO_COMPLETE_PROPOSAL"
    | "FOUNDATION_ADD_USER_TO_NONPROFIT"
    | "REQUEST_TO_COMPLETE_REPORT"
    | "STAGE_CHANGE_MESSAGE"
    | "EXTERNAL_REVIEWER"
    | "TASK_COMMENT_MENTION"
    | "TASK_COMMENT_ADDED"
    | "BULK_EXTERNAL_REVIEWER";
  subjectText: string;
  messageText: string;
  ccEmail: string;
  stageName: string;
  pipelineId: string;
  replyTo: string;

  constructor(
    _customEmailTemplateType:
      | "REQUEST_TO_COMPLETE_PROPOSAL"
      | "FOUNDATION_ADD_USER_TO_NONPROFIT"
      | "REQUEST_TO_COMPLETE_REPORT"
      | "STAGE_CHANGE_MESSAGE"
      | "EXTERNAL_REVIEWER"
      | "TASK_COMMENT_MENTION"
      | "TASK_COMMENT_ADDED"
      | "BULK_EXTERNAL_REVIEWER",
    _subjectText: string,
    _messageText: string,
    _ccEmail: string,
    _stageName: string,
    _pipelineId: string,
    _replyTo: string
  ) {
    this.customEmailTemplateType = _customEmailTemplateType;
    this.subjectText = _subjectText;
    this.messageText = _messageText;
    this.ccEmail = _ccEmail;
    this.stageName = _stageName;
    this.pipelineId = _pipelineId;
    this.replyTo = _replyTo;
  }
}

class CustomGrantType {
  id: string;
  name: string;
  active: boolean;

  constructor(_id: string, _name: string, _active: boolean) {
    this.id = _id;
    this.name = _name;
    this.active = _active;
  }
}

class DocumentItem {
  type:
    | "GRANTEE_CRM_DATA"
    | "GRANTEE_CRM_CUSTOM_FIELD"
    | "SUBMISSION_RESPONSE"
    | "SUBMISSION_METADATA"
    | "FORM_FIELDS"
    | "CUSTOM"
    | "AVG_TASK_RESPONSE";
  key: string;
  displayName: string;
  formName: string;
  formComponentType:
    | "FILE_UPLOAD"
    | "FILE_DOWNLOAD"
    | "SINGLE_RESPONSE"
    | "MULTI_RESPONSE"
    | "DROPDOWN_LIST"
    | "MULTI_DROPDOWN_LIST"
    | "RATING"
    | "TEXT"
    | "SHORT_TEXT"
    | "FOUNDATION_USER"
    | "TABLE"
    | "NUMBER"
    | "DATE"
    | "BUDGET_CATEGORY"
    | "REPORT_TEMPLATE"
    | "YES_NO_CHECKBOX"
    | "ORG_LEGAL_NAME"
    | "ORG_DBA"
    | "ORG_LEGAL_STATUS"
    | "ORG_EIN"
    | "ORG_HQ"
    | "ORG_HQ_ADDRESS_1"
    | "ORG_HQ_ADDRESS_2"
    | "ORG_HQ_CITY"
    | "ORG_HQ_STATE"
    | "ORG_HQ_ZIPCODE"
    | "ORG_HQ_COUNTRY"
    | "ORG_MAILING_ADDR"
    | "ORG_MAILING_ADDRESS_1"
    | "ORG_MAILING_ADDRESS_2"
    | "ORG_MAILING_CITY"
    | "ORG_MAILING_STATE"
    | "ORG_MAILING_ZIPCODE"
    | "ORG_MAILING_COUNTRY"
    | "ORG_PHONE_NUMBER"
    | "ORG_EMAIL"
    | "ORG_WEBSITE"
    | "ORG_FISCAL_SPONSOR"
    | "ORG_HAS_FISCAL_SPONSOR"
    | "ORG_FISCAL_SPONSOR_NAME"
    | "ORG_FISCAL_SPONSOR_EIN"
    | "ORG_FISCAL_SPONSOR_ADDRESS"
    | "ORG_MISSION"
    | "ORG_VISION"
    | "ORG_DEI"
    | "ORG_FOUNDED_YEAR"
    | "ORG_EMP_FULL_TIME"
    | "ORG_EMP_PART_TIME"
    | "ORG_PRIMARY_CONTACT"
    | "ORG_PRIMARY_CONTACT_NAME"
    | "ORG_PRIMARY_CONTACT_EMAIL"
    | "ORG_PROJECT_DIRECTOR"
    | "ORG_PROJECT_DIRECTOR_NAME"
    | "ORG_PROJECT_DIRECTOR_EMAIL"
    | "ORG_EXECUTIVE"
    | "ORG_EXECUTIVE_NAME"
    | "ORG_EXECUTIVE_EMAIL"
    | "ORG_BUDGET"
    | "ORG_BUDGET_REVENUE"
    | "ORG_BUDGET_EXPENDITURES"
    | "ORG_SOCIAL"
    | "ORG_SOCIAL_FACEBOOK"
    | "ORG_SOCIAL_INSTAGRAM"
    | "ORG_SOCIAL_TWITTER"
    | "ORG_SOCIAL_LINKEDIN"
    | "ORG_SOCIAL_GUIDESTAR"
    | "GRANT_AMOUNT_REQ"
    | "GRANT_TYPE"
    | "GRANT_PROJECT_TITLE"
    | "GRANT_PROJECT_BUDGET"
    | "GRANT_CO_FUNDING"
    | "GRANT_PERIOD"
    | "GRANT_PERIOD_START"
    | "GRANT_PERIOD_END"
    | "GRANT_PROP_TITLE"
    | "GRANT_RELEVANCY"
    | "GRANT_AREA"
    | "GRANT_AREA_CITY"
    | "GRANT_AREA_STATE"
    | "GRANT_AREA_COUNTRY"
    | "GRANT_POP_SERVED"
    | "PAGE_DIVIDER"
    | "TEXT_DESCRIPTION"
    | "FORMATTED_TEXT"
    | "CURRENCY"
    | "EXTERNAL_REFERENCES";

  constructor(
    _type:
      | "GRANTEE_CRM_DATA"
      | "GRANTEE_CRM_CUSTOM_FIELD"
      | "SUBMISSION_RESPONSE"
      | "SUBMISSION_METADATA"
      | "FORM_FIELDS"
      | "CUSTOM"
      | "AVG_TASK_RESPONSE",
    _key: string,
    _displayName: string,
    _formName: string,
    _formComponentType:
      | "FILE_UPLOAD"
      | "FILE_DOWNLOAD"
      | "SINGLE_RESPONSE"
      | "MULTI_RESPONSE"
      | "DROPDOWN_LIST"
      | "MULTI_DROPDOWN_LIST"
      | "RATING"
      | "TEXT"
      | "SHORT_TEXT"
      | "FOUNDATION_USER"
      | "TABLE"
      | "NUMBER"
      | "DATE"
      | "BUDGET_CATEGORY"
      | "REPORT_TEMPLATE"
      | "YES_NO_CHECKBOX"
      | "ORG_LEGAL_NAME"
      | "ORG_DBA"
      | "ORG_LEGAL_STATUS"
      | "ORG_EIN"
      | "ORG_HQ"
      | "ORG_HQ_ADDRESS_1"
      | "ORG_HQ_ADDRESS_2"
      | "ORG_HQ_CITY"
      | "ORG_HQ_STATE"
      | "ORG_HQ_ZIPCODE"
      | "ORG_HQ_COUNTRY"
      | "ORG_MAILING_ADDR"
      | "ORG_MAILING_ADDRESS_1"
      | "ORG_MAILING_ADDRESS_2"
      | "ORG_MAILING_CITY"
      | "ORG_MAILING_STATE"
      | "ORG_MAILING_ZIPCODE"
      | "ORG_MAILING_COUNTRY"
      | "ORG_PHONE_NUMBER"
      | "ORG_EMAIL"
      | "ORG_WEBSITE"
      | "ORG_FISCAL_SPONSOR"
      | "ORG_HAS_FISCAL_SPONSOR"
      | "ORG_FISCAL_SPONSOR_NAME"
      | "ORG_FISCAL_SPONSOR_EIN"
      | "ORG_FISCAL_SPONSOR_ADDRESS"
      | "ORG_MISSION"
      | "ORG_VISION"
      | "ORG_DEI"
      | "ORG_FOUNDED_YEAR"
      | "ORG_EMP_FULL_TIME"
      | "ORG_EMP_PART_TIME"
      | "ORG_PRIMARY_CONTACT"
      | "ORG_PRIMARY_CONTACT_NAME"
      | "ORG_PRIMARY_CONTACT_EMAIL"
      | "ORG_PROJECT_DIRECTOR"
      | "ORG_PROJECT_DIRECTOR_NAME"
      | "ORG_PROJECT_DIRECTOR_EMAIL"
      | "ORG_EXECUTIVE"
      | "ORG_EXECUTIVE_NAME"
      | "ORG_EXECUTIVE_EMAIL"
      | "ORG_BUDGET"
      | "ORG_BUDGET_REVENUE"
      | "ORG_BUDGET_EXPENDITURES"
      | "ORG_SOCIAL"
      | "ORG_SOCIAL_FACEBOOK"
      | "ORG_SOCIAL_INSTAGRAM"
      | "ORG_SOCIAL_TWITTER"
      | "ORG_SOCIAL_LINKEDIN"
      | "ORG_SOCIAL_GUIDESTAR"
      | "GRANT_AMOUNT_REQ"
      | "GRANT_TYPE"
      | "GRANT_PROJECT_TITLE"
      | "GRANT_PROJECT_BUDGET"
      | "GRANT_CO_FUNDING"
      | "GRANT_PERIOD"
      | "GRANT_PERIOD_START"
      | "GRANT_PERIOD_END"
      | "GRANT_PROP_TITLE"
      | "GRANT_RELEVANCY"
      | "GRANT_AREA"
      | "GRANT_AREA_CITY"
      | "GRANT_AREA_STATE"
      | "GRANT_AREA_COUNTRY"
      | "GRANT_POP_SERVED"
      | "PAGE_DIVIDER"
      | "TEXT_DESCRIPTION"
      | "FORMATTED_TEXT"
      | "CURRENCY"
      | "EXTERNAL_REFERENCES"
  ) {
    this.type = _type;
    this.key = _key;
    this.displayName = _displayName;
    this.formName = _formName;
    this.formComponentType = _formComponentType;
  }
}

class ExternalReviewerConfiguration {
  tableConfiguration: ExternalReviewerTableConfiguration;

  constructor(_tableConfiguration: ExternalReviewerTableConfiguration) {
    this.tableConfiguration = _tableConfiguration;
  }
}

class ExternalReviewerTableConfiguration {
  visibleColumns: DocumentItem[];

  constructor(_visibleColumns: DocumentItem[]) {
    this.visibleColumns = _visibleColumns;
  }
}

class FeatureSet {
  docusignEnabled: boolean;
  landingPageEnabled: boolean;
  multiplePipelinesEnabled: boolean;
  paymentsEnabled: boolean;
  externalReviewersEnabled: number;
  quickbooksEnabled: boolean;
  boardDocumentEnabled: boolean;
  donorManagementEnabled: boolean;
  documentCenterEnabled: boolean;
  candidEnabled: boolean;
  customDashboardEnabled: boolean;
  mailChimpEnabled: boolean;
  salesforceEnabled: boolean;

  constructor(
    _docusignEnabled: boolean,
    _landingPageEnabled: boolean,
    _multiplePipelinesEnabled: boolean,
    _paymentsEnabled: boolean,
    _externalReviewersEnabled: number,
    _quickbooksEnabled: boolean,
    _boardDocumentEnabled: boolean,
    _donorManagementEnabled: boolean,
    _documentCenterEnabled: boolean,
    _candidEnabled: boolean,
    _customDashboardEnabled: boolean,
    _mailChimpEnabled: boolean,
    _salesforceEnabled: boolean
  ) {
    this.docusignEnabled = _docusignEnabled;
    this.landingPageEnabled = _landingPageEnabled;
    this.multiplePipelinesEnabled = _multiplePipelinesEnabled;
    this.paymentsEnabled = _paymentsEnabled;
    this.externalReviewersEnabled = _externalReviewersEnabled;
    this.quickbooksEnabled = _quickbooksEnabled;
    this.boardDocumentEnabled = _boardDocumentEnabled;
    this.donorManagementEnabled = _donorManagementEnabled;
    this.documentCenterEnabled = _documentCenterEnabled;
    this.candidEnabled = _candidEnabled;
    this.customDashboardEnabled = _customDashboardEnabled;
    this.mailChimpEnabled = _mailChimpEnabled;
    this.salesforceEnabled = _salesforceEnabled;
  }
}

class FoundationCRMField {
  name: string;
  key: string;
  visibleInTable: boolean;
  type:
    | "SYSTEM"
    | "TEXT"
    | "NUMBER"
    | "CURRENCY"
    | "USER"
    | "DATE"
    | "BOOLEAN"
    | "TAGS"
    | "MULTI";
  options: string[];

  constructor(
    _name: string,
    _key: string,
    _visibleInTable: boolean,
    _type:
      | "SYSTEM"
      | "TEXT"
      | "NUMBER"
      | "CURRENCY"
      | "USER"
      | "DATE"
      | "BOOLEAN"
      | "TAGS"
      | "MULTI",
    _options: string[]
  ) {
    this.name = _name;
    this.key = _key;
    this.visibleInTable = _visibleInTable;
    this.type = _type;
    this.options = _options;
  }
}

class FoundationMailSettings {
  emailTemplates: CustomEmailTemplate[];

  constructor(_emailTemplates: CustomEmailTemplate[]) {
    this.emailTemplates = _emailTemplates;
  }
}

class FoundationMetadata {
  foundationId: string;
  fiscalStart: string;
  stages: GrantStageWorkflow;
  scoringCriteria: ScoringCriteria;
  tags: FoundationMetadataTag[];
  budget: Budget;
  featureSet: FeatureSet;
  configuration: ConfigurationSettings;
  reviewers: FoundationReviewerUser[];
  templates: CustomEmailTemplate[];

  constructor(
    _foundationId: string,
    _fiscalStart: string,
    _stages: GrantStageWorkflow,
    _scoringCriteria: ScoringCriteria,
    _tags: FoundationMetadataTag[],
    _budget: Budget,
    _featureSet: FeatureSet,
    _configuration: ConfigurationSettings,
    _reviewers: FoundationReviewerUser[],
    _templates: CustomEmailTemplate[]
  ) {
    this.foundationId = _foundationId;
    this.fiscalStart = _fiscalStart;
    this.stages = _stages;
    this.scoringCriteria = _scoringCriteria;
    this.tags = _tags;
    this.budget = _budget;
    this.featureSet = _featureSet;
    this.configuration = _configuration;
    this.reviewers = _reviewers;
    this.templates = _templates;
  }
}

class FoundationMetadataTag {
  id: string;
  name: string;
  color: string;

  constructor(_id: string, _name: string, _color: string) {
    this.id = _id;
    this.name = _name;
    this.color = _color;
  }
}

class FoundationQuickbooksSetting {
  realmId: string;
  accessToken: string;
  refreshToken: string;
  paymentSyncSettings: QBPaymentSyncSetting;

  constructor(
    _realmId: string,
    _accessToken: string,
    _refreshToken: string,
    _paymentSyncSettings: QBPaymentSyncSetting
  ) {
    this.realmId = _realmId;
    this.accessToken = _accessToken;
    this.refreshToken = _refreshToken;
    this.paymentSyncSettings = _paymentSyncSettings;
  }
}

class FoundationReviewerUser {
  id: string;
  displayName: string;
  email: string;
  active: boolean;
  temelioRole: "SUPERADMIN" | "ADMIN" | "USER";
  created: string;
  suffix: string;
  pronouns: string;
  ofacFlags: OfacFlags;
  mfaRequired: boolean;
  foundationRoleMap: any;
  nonprofitRoleMap: any;
  associatedFoundationsFromNonprofit: string[];
  role: string;
  name: string;
  temelioSuperuser: boolean;
  temelioAdmin: boolean;
  hasAdminAccess: boolean;

  constructor(
    _id: string,
    _displayName: string,
    _email: string,
    _active: boolean,
    _temelioRole: "SUPERADMIN" | "ADMIN" | "USER",
    _created: string,
    _suffix: string,
    _pronouns: string,
    _ofacFlags: OfacFlags,
    _mfaRequired: boolean,
    _foundationRoleMap: any,
    _nonprofitRoleMap: any,
    _associatedFoundationsFromNonprofit: string[],
    _role: string,
    _name: string,
    _temelioSuperuser: boolean,
    _temelioAdmin: boolean,
    _hasAdminAccess: boolean
  ) {
    this.id = _id;
    this.displayName = _displayName;
    this.email = _email;
    this.active = _active;
    this.temelioRole = _temelioRole;
    this.created = _created;
    this.suffix = _suffix;
    this.pronouns = _pronouns;
    this.ofacFlags = _ofacFlags;
    this.mfaRequired = _mfaRequired;
    this.foundationRoleMap = _foundationRoleMap;
    this.nonprofitRoleMap = _nonprofitRoleMap;
    this.associatedFoundationsFromNonprofit =
      _associatedFoundationsFromNonprofit;
    this.role = _role;
    this.name = _name;
    this.temelioSuperuser = _temelioSuperuser;
    this.temelioAdmin = _temelioAdmin;
    this.hasAdminAccess = _hasAdminAccess;
  }
}

class FoundationSalesforceConfiguration {
  salesforceSyncRequest: SalesforceSyncRequest;
  salesforceTokenResponse: SalesforceTokenResponse;

  constructor(
    _salesforceSyncRequest: SalesforceSyncRequest,
    _salesforceTokenResponse: SalesforceTokenResponse
  ) {
    this.salesforceSyncRequest = _salesforceSyncRequest;
    this.salesforceTokenResponse = _salesforceTokenResponse;
  }
}

class GrantStage {
  name: string;
  displayName: string;
  description: string;
  label:
    | "VETTING"
    | "DRAFT"
    | "SUBMITTED"
    | "REVIEW"
    | "PENDING"
    | "APPROVED"
    | "CONTRACT"
    | "PAYMENT"
    | "REPORTING"
    | "AWARDED"
    | "DENIED";
  tasks: TaskTemplate[];
  notifyGrantee: boolean;

  constructor(
    _name: string,
    _displayName: string,
    _description: string,
    _label:
      | "VETTING"
      | "DRAFT"
      | "SUBMITTED"
      | "REVIEW"
      | "PENDING"
      | "APPROVED"
      | "CONTRACT"
      | "PAYMENT"
      | "REPORTING"
      | "AWARDED"
      | "DENIED",
    _tasks: TaskTemplate[],
    _notifyGrantee: boolean
  ) {
    this.name = _name;
    this.displayName = _displayName;
    this.description = _description;
    this.label = _label;
    this.tasks = _tasks;
    this.notifyGrantee = _notifyGrantee;
  }
}

class GrantStageWorkflow {
  stages: GrantStage[];

  constructor(_stages: GrantStage[]) {
    this.stages = _stages;
  }
}

class GrantTypeConfiguration {
  grantTypes: CustomGrantType[];

  constructor(_grantTypes: CustomGrantType[]) {
    this.grantTypes = _grantTypes;
  }
}

class GranteeProfileUpdate {
  updateOptionType: "HQ_ADDRESS" | "MAILING_ADDRESS";

  constructor(_updateOptionType: "HQ_ADDRESS" | "MAILING_ADDRESS") {
    this.updateOptionType = _updateOptionType;
  }
}

class GranteeProfileUpdateConfiguration {
  granteeProfileUpdates: GranteeProfileUpdate[];

  constructor(_granteeProfileUpdates: GranteeProfileUpdate[]) {
    this.granteeProfileUpdates = _granteeProfileUpdates;
  }
}

class MailChimpFoundationConfiguration {
  accessToken: string;
  server: string;
  listId: string;

  constructor(_accessToken: string, _server: string, _listId: string) {
    this.accessToken = _accessToken;
    this.server = _server;
    this.listId = _listId;
  }
}

class MetabaseConfiguration {
  dashboardUrls: MetabaseDashboardUrl[];

  constructor(_dashboardUrls: MetabaseDashboardUrl[]) {
    this.dashboardUrls = _dashboardUrls;
  }
}

class MetabaseDashboardUrl {
  url: string;

  constructor(_url: string) {
    this.url = _url;
  }
}

class Pipeline {
  id: string;
  name: string;
  description: string;
  workflow: GrantStageWorkflow;

  constructor(
    _id: string,
    _name: string,
    _description: string,
    _workflow: GrantStageWorkflow
  ) {
    this.id = _id;
    this.name = _name;
    this.description = _description;
    this.workflow = _workflow;
  }
}

class QBPaymentDestination {
  crmFieldDestination: CRMConfigurationField;

  constructor(_crmFieldDestination: CRMConfigurationField) {
    this.crmFieldDestination = _crmFieldDestination;
  }
}

class QBPaymentSource {
  paymentSourceType: "BILL";
  paymentSourceIdentifiers: string[];
  paymentSourceTransformer: "JCC";

  constructor(
    _paymentSourceType: "BILL",
    _paymentSourceIdentifiers: string[],
    _paymentSourceTransformer: "JCC"
  ) {
    this.paymentSourceType = _paymentSourceType;
    this.paymentSourceIdentifiers = _paymentSourceIdentifiers;
    this.paymentSourceTransformer = _paymentSourceTransformer;
  }
}

class QBPaymentSyncSetting {
  billSourceId: QBPaymentSource;
  billDestinationId: QBPaymentDestination;

  constructor(
    _billSourceId: QBPaymentSource,
    _billDestinationId: QBPaymentDestination
  ) {
    this.billSourceId = _billSourceId;
    this.billDestinationId = _billDestinationId;
  }
}

class SalesforceEntityToUpdate {
  salesforceTemelioObject: "ACCOUNT" | "CONTACT" | "PAYMENT";
  salesforceObjectName: string;
  salesforceRelationshipKey: string;
  salesforceTemelioFieldName: string;
  temelioSalesforceFieldMappings: TemelioSalesforceFieldMapping[];

  constructor(
    _salesforceTemelioObject: "ACCOUNT" | "CONTACT" | "PAYMENT",
    _salesforceObjectName: string,
    _salesforceRelationshipKey: string,
    _salesforceTemelioFieldName: string,
    _temelioSalesforceFieldMappings: TemelioSalesforceFieldMapping[]
  ) {
    this.salesforceTemelioObject = _salesforceTemelioObject;
    this.salesforceObjectName = _salesforceObjectName;
    this.salesforceRelationshipKey = _salesforceRelationshipKey;
    this.salesforceTemelioFieldName = _salesforceTemelioFieldName;
    this.temelioSalesforceFieldMappings = _temelioSalesforceFieldMappings;
  }
}

class SalesforceSyncRequest {
  salesforceAccountName: string;
  salesforceTemelioFieldName: string;
  entitiesToUpdate: SalesforceEntityToUpdate[];
  accountsToUpdate: string[];

  constructor(
    _salesforceAccountName: string,
    _salesforceTemelioFieldName: string,
    _entitiesToUpdate: SalesforceEntityToUpdate[],
    _accountsToUpdate: string[]
  ) {
    this.salesforceAccountName = _salesforceAccountName;
    this.salesforceTemelioFieldName = _salesforceTemelioFieldName;
    this.entitiesToUpdate = _entitiesToUpdate;
    this.accountsToUpdate = _accountsToUpdate;
  }
}

class SalesforceTokenResponse {
  access_token: string;
  refresh_token: string;
  signature: string;
  scope: string;
  instance_url: string;
  id: string;
  token_type: string;
  issued_at: number;

  constructor(
    _access_token: string,
    _refresh_token: string,
    _signature: string,
    _scope: string,
    _instance_url: string,
    _id: string,
    _token_type: string,
    _issued_at: number
  ) {
    this.access_token = _access_token;
    this.refresh_token = _refresh_token;
    this.signature = _signature;
    this.scope = _scope;
    this.instance_url = _instance_url;
    this.id = _id;
    this.token_type = _token_type;
    this.issued_at = _issued_at;
  }
}

class ScoringCriteria {
  criteriaList: FormItem[];
  enabled: boolean;

  constructor(_criteriaList: FormItem[], _enabled: boolean) {
    this.criteriaList = _criteriaList;
    this.enabled = _enabled;
  }
}

class TaskTemplate {
  id: string;
  name: string;
  type: "SYSTEM" | "USER";
  systemLabel:
    | "GRANT_AGREEMENT"
    | "PAYMENT"
    | "REPORTING"
    | "REVIEW"
    | "REMINDER"
    | "CUSTOM_REMINDER"
    | "DOCUSIGN"
    | "PLAID_PAYMENT_DETAILS"
    | "EXTERNAL"
    | "EXTERNAL_REVIEWER"
    | "REFEREE"
    | "GRANT_UPLOAD"
    | "GRANT_TEMPLATE"
    | "MULTI_GRANT_DOCUMENT_REVIEW"
    | "GRANT_DOCUMENT_REVIEW"
    | "GRANT_SIGNATURE_REQUEST"
    | "PLAID_PAYMENT_SECURE_PAYMENT_STORAGE"
    | "SECURE_PAYMENT_STORAGE"
    | "PDF";
  foundationId: string;
  createdBy: string;
  updatedBy: string;
  components: FormItem[];
  additionalInfo: TaskTemplateAdditionalInfo;
  created: string;
  updated: string;
  createdByUser: FoundationUser;
  updatedByUser: FoundationUser;

  constructor(
    _id: string,
    _name: string,
    _type: "SYSTEM" | "USER",
    _systemLabel:
      | "GRANT_AGREEMENT"
      | "PAYMENT"
      | "REPORTING"
      | "REVIEW"
      | "REMINDER"
      | "CUSTOM_REMINDER"
      | "DOCUSIGN"
      | "PLAID_PAYMENT_DETAILS"
      | "EXTERNAL"
      | "EXTERNAL_REVIEWER"
      | "REFEREE"
      | "GRANT_UPLOAD"
      | "GRANT_TEMPLATE"
      | "MULTI_GRANT_DOCUMENT_REVIEW"
      | "GRANT_DOCUMENT_REVIEW"
      | "GRANT_SIGNATURE_REQUEST"
      | "PLAID_PAYMENT_SECURE_PAYMENT_STORAGE"
      | "SECURE_PAYMENT_STORAGE"
      | "PDF",
    _foundationId: string,
    _createdBy: string,
    _updatedBy: string,
    _components: FormItem[],
    _additionalInfo: TaskTemplateAdditionalInfo,
    _created: string,
    _updated: string,
    _createdByUser: FoundationUser,
    _updatedByUser: FoundationUser
  ) {
    this.id = _id;
    this.name = _name;
    this.type = _type;
    this.systemLabel = _systemLabel;
    this.foundationId = _foundationId;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.components = _components;
    this.additionalInfo = _additionalInfo;
    this.created = _created;
    this.updated = _updated;
    this.createdByUser = _createdByUser;
    this.updatedByUser = _updatedByUser;
  }
}

class TaskTemplateAdditionalInfo {
  anvilPdfAdditionalInfo: AnvilPDFAdditionalInfo;

  constructor(_anvilPdfAdditionalInfo: AnvilPDFAdditionalInfo) {
    this.anvilPdfAdditionalInfo = _anvilPdfAdditionalInfo;
  }
}

class TemelioSalesforceFieldMapping {
  temelioField:
    | "ORGANIZATION_NAME"
    | "ORGANIZATION_LEGAL_NAME"
    | "ORGANIZATION_EIN"
    | "ORGANIZATION_MAILING_ADDRESS_1"
    | "CONTACT_NAME"
    | "CONTACT_EMAIL"
    | "CONTACT_TITLE"
    | "PAYMENT_AMOUNT"
    | "PAYMENT_DUE_DATE";
  salesforceFieldName: string;

  constructor(
    _temelioField:
      | "ORGANIZATION_NAME"
      | "ORGANIZATION_LEGAL_NAME"
      | "ORGANIZATION_EIN"
      | "ORGANIZATION_MAILING_ADDRESS_1"
      | "CONTACT_NAME"
      | "CONTACT_EMAIL"
      | "CONTACT_TITLE"
      | "PAYMENT_AMOUNT"
      | "PAYMENT_DUE_DATE",
    _salesforceFieldName: string
  ) {
    this.temelioField = _temelioField;
    this.salesforceFieldName = _salesforceFieldName;
  }
}

class NonprofitIRSUpdateRequest {
  nonprofitIds: string[];
  cutOffDate: string;

  constructor(_nonprofitIds: string[], _cutOffDate: string) {
    this.nonprofitIds = _nonprofitIds;
    this.cutOffDate = _cutOffDate;
  }
}

class NonprofitAdditionalInfo {
  irsData: NonprofitIRSData;
  completedOnboarding: boolean;
  plaidData: PlaidData;

  constructor(
    _irsData: NonprofitIRSData,
    _completedOnboarding: boolean,
    _plaidData: PlaidData
  ) {
    this.irsData = _irsData;
    this.completedOnboarding = _completedOnboarding;
    this.plaidData = _plaidData;
  }
}

class NonprofitIRSData {
  lastUpdated: string;
  latestFilingPDFURL: string;
  latestFilingYear: number;
  latestFormType: number;
  subsectionCode: number;
  irsLegalStatus: string;
  latestFormTypeFiled: string;

  constructor(
    _lastUpdated: string,
    _latestFilingPDFURL: string,
    _latestFilingYear: number,
    _latestFormType: number,
    _subsectionCode: number,
    _irsLegalStatus: string,
    _latestFormTypeFiled: string
  ) {
    this.lastUpdated = _lastUpdated;
    this.latestFilingPDFURL = _latestFilingPDFURL;
    this.latestFilingYear = _latestFilingYear;
    this.latestFormType = _latestFormType;
    this.subsectionCode = _subsectionCode;
    this.irsLegalStatus = _irsLegalStatus;
    this.latestFormTypeFiled = _latestFormTypeFiled;
  }
}

class NonprofitMetadata {
  nonprofitId: string;
  description: string;
  dba: string;
  phoneNumber: string;
  mission: string;
  vision: string;
  hasFiscalSponsor: boolean;
  fiscalSponsor: FiscalSponsor;
  orgEmail: string;
  organizationLogo: string;
  headquarters: Address;
  mailingAddress: Address;
  website: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedIn: string;
  guidestarProfile: string;
  legalStatus: string;
  foundingDate: string;
  other: NonprofitAdditionalInfo;
  irsDeterminationLetter: string;
  ofacFlags: OfacFlags;
  dbaSame: boolean;
  mailingAddressSame: boolean;
  irsRecipientStatus:
    | "PF"
    | "POF"
    | "EOF"
    | "PC"
    | "GOV"
    | "SO_DP"
    | "SO_I"
    | "SO_II"
    | "SO_III_FI"
    | "SO_III_NFI"
    | "TPS"
    | "NC"
    | "I";

  constructor(
    _nonprofitId: string,
    _description: string,
    _dba: string,
    _phoneNumber: string,
    _mission: string,
    _vision: string,
    _hasFiscalSponsor: boolean,
    _fiscalSponsor: FiscalSponsor,
    _orgEmail: string,
    _organizationLogo: string,
    _headquarters: Address,
    _mailingAddress: Address,
    _website: string,
    _facebook: string,
    _twitter: string,
    _instagram: string,
    _linkedIn: string,
    _guidestarProfile: string,
    _legalStatus: string,
    _foundingDate: string,
    _other: NonprofitAdditionalInfo,
    _irsDeterminationLetter: string,
    _ofacFlags: OfacFlags,
    _dbaSame: boolean,
    _mailingAddressSame: boolean,
    _irsRecipientStatus:
      | "PF"
      | "POF"
      | "EOF"
      | "PC"
      | "GOV"
      | "SO_DP"
      | "SO_I"
      | "SO_II"
      | "SO_III_FI"
      | "SO_III_NFI"
      | "TPS"
      | "NC"
      | "I"
  ) {
    this.nonprofitId = _nonprofitId;
    this.description = _description;
    this.dba = _dba;
    this.phoneNumber = _phoneNumber;
    this.mission = _mission;
    this.vision = _vision;
    this.hasFiscalSponsor = _hasFiscalSponsor;
    this.fiscalSponsor = _fiscalSponsor;
    this.orgEmail = _orgEmail;
    this.organizationLogo = _organizationLogo;
    this.headquarters = _headquarters;
    this.mailingAddress = _mailingAddress;
    this.website = _website;
    this.facebook = _facebook;
    this.twitter = _twitter;
    this.instagram = _instagram;
    this.linkedIn = _linkedIn;
    this.guidestarProfile = _guidestarProfile;
    this.legalStatus = _legalStatus;
    this.foundingDate = _foundingDate;
    this.other = _other;
    this.irsDeterminationLetter = _irsDeterminationLetter;
    this.ofacFlags = _ofacFlags;
    this.dbaSame = _dbaSame;
    this.mailingAddressSame = _mailingAddressSame;
    this.irsRecipientStatus = _irsRecipientStatus;
  }
}

class PlaidData {
  accessToken: string;
  itemId: string;
  created: string;
  selectedAccountId: string;

  constructor(
    _accessToken: string,
    _itemId: string,
    _created: string,
    _selectedAccountId: string
  ) {
    this.accessToken = _accessToken;
    this.itemId = _itemId;
    this.created = _created;
    this.selectedAccountId = _selectedAccountId;
  }
}

class Nonprofit {
  id: string;
  legalName: string;
  ein: string;
  entityType: "ORGANIZATION" | "INDIVIDUAL";
  active: boolean;
  created: string;

  constructor(
    _id: string,
    _legalName: string,
    _ein: string,
    _entityType: "ORGANIZATION" | "INDIVIDUAL",
    _active: boolean,
    _created: string
  ) {
    this.id = _id;
    this.legalName = _legalName;
    this.ein = _ein;
    this.entityType = _entityType;
    this.active = _active;
    this.created = _created;
  }
}

class AwardStatistics {
  averageGrantAmount: number;
  medianGrantAmount: number;
  smallestGrantAmount: GrantPayment;
  largestGrantAmount: GrantPayment;
  largestGrant: GrantProposalSubmission;
  smallestGrant: GrantProposalSubmission;

  constructor(
    _averageGrantAmount: number,
    _medianGrantAmount: number,
    _smallestGrantAmount: GrantPayment,
    _largestGrantAmount: GrantPayment,
    _largestGrant: GrantProposalSubmission,
    _smallestGrant: GrantProposalSubmission
  ) {
    this.averageGrantAmount = _averageGrantAmount;
    this.medianGrantAmount = _medianGrantAmount;
    this.smallestGrantAmount = _smallestGrantAmount;
    this.largestGrantAmount = _largestGrantAmount;
    this.largestGrant = _largestGrant;
    this.smallestGrant = _smallestGrant;
  }
}

class BudgetCategoryAllocation {
  budgetCategory: string;
  awardedNonprofits: NonprofitAmount[];
  awardedAmount: number;
  awardedPercentage: number;
  committedNonprofits: NonprofitAmount[];
  committedAmount: number;
  committedPercentage: number;
  pendingAmount: number;
  pendingPercentage: number;
  targetAmount: number;

  constructor(
    _budgetCategory: string,
    _awardedNonprofits: NonprofitAmount[],
    _awardedAmount: number,
    _awardedPercentage: number,
    _committedNonprofits: NonprofitAmount[],
    _committedAmount: number,
    _committedPercentage: number,
    _pendingAmount: number,
    _pendingPercentage: number,
    _targetAmount: number
  ) {
    this.budgetCategory = _budgetCategory;
    this.awardedNonprofits = _awardedNonprofits;
    this.awardedAmount = _awardedAmount;
    this.awardedPercentage = _awardedPercentage;
    this.committedNonprofits = _committedNonprofits;
    this.committedAmount = _committedAmount;
    this.committedPercentage = _committedPercentage;
    this.pendingAmount = _pendingAmount;
    this.pendingPercentage = _pendingPercentage;
    this.targetAmount = _targetAmount;
  }
}

class BudgetCategoryYOYData {
  budgetCategory: string;
  yearlyData: YearlyData[];

  constructor(_budgetCategory: string, _yearlyData: YearlyData[]) {
    this.budgetCategory = _budgetCategory;
    this.yearlyData = _yearlyData;
  }
}

class Currency {
  currencyCode: string;
  defaultFractionDigits: number;
  numericCode: number;
  displayName: string;
  symbol: string;
  numericCodeAsString: string;

  constructor(
    _currencyCode: string,
    _defaultFractionDigits: number,
    _numericCode: number,
    _displayName: string,
    _symbol: string,
    _numericCodeAsString: string
  ) {
    this.currencyCode = _currencyCode;
    this.defaultFractionDigits = _defaultFractionDigits;
    this.numericCode = _numericCode;
    this.displayName = _displayName;
    this.symbol = _symbol;
    this.numericCodeAsString = _numericCodeAsString;
  }
}

class CustomGrantTypeAllocation {
  grantType: CustomGrantType;
  amount: number;
  percentage: number;
  nonprofitAmounts: NonprofitAmount[];

  constructor(
    _grantType: CustomGrantType,
    _amount: number,
    _percentage: number,
    _nonprofitAmounts: NonprofitAmount[]
  ) {
    this.grantType = _grantType;
    this.amount = _amount;
    this.percentage = _percentage;
    this.nonprofitAmounts = _nonprofitAmounts;
  }
}

class CustomGrantTypeYOYData {
  grantType: CustomGrantType;
  yearlyData: YearlyData[];

  constructor(_grantType: CustomGrantType, _yearlyData: YearlyData[]) {
    this.grantType = _grantType;
    this.yearlyData = _yearlyData;
  }
}

class DashboardResponse {
  totalAwardedHistorical: number;
  yearlyData: FiscalYearData[];
  yoyData: YOYData;
  customRangeData: FiscalYearData;

  constructor(
    _totalAwardedHistorical: number,
    _yearlyData: FiscalYearData[],
    _yoyData: YOYData,
    _customRangeData: FiscalYearData
  ) {
    this.totalAwardedHistorical = _totalAwardedHistorical;
    this.yearlyData = _yearlyData;
    this.yoyData = _yoyData;
    this.customRangeData = _customRangeData;
  }
}

class FirstFormDetails {
  formTitle: string;
  internal: boolean;

  constructor(_formTitle: string, _internal: boolean) {
    this.formTitle = _formTitle;
    this.internal = _internal;
  }
}

class FiscalRange {
  start: string;
  end: string;

  constructor(_start: string, _end: string) {
    this.start = _start;
    this.end = _end;
  }
}

class FiscalYearData {
  range: FiscalRange;
  totalGrantsFiscalYear: number;
  totalAwardedFiscalYear: number;
  totalYearBudget: BudgetCategoryAllocation;
  categoryYearBudget: BudgetCategoryAllocation[];
  tagAllocations: FoundationTagAllocation[];
  grantTypeAllocations: GrantTypeAllocation[];
  customGrantTypeAllocations: CustomGrantTypeAllocation[];
  awardStatistics: AwardStatistics;

  constructor(
    _range: FiscalRange,
    _totalGrantsFiscalYear: number,
    _totalAwardedFiscalYear: number,
    _totalYearBudget: BudgetCategoryAllocation,
    _categoryYearBudget: BudgetCategoryAllocation[],
    _tagAllocations: FoundationTagAllocation[],
    _grantTypeAllocations: GrantTypeAllocation[],
    _customGrantTypeAllocations: CustomGrantTypeAllocation[],
    _awardStatistics: AwardStatistics
  ) {
    this.range = _range;
    this.totalGrantsFiscalYear = _totalGrantsFiscalYear;
    this.totalAwardedFiscalYear = _totalAwardedFiscalYear;
    this.totalYearBudget = _totalYearBudget;
    this.categoryYearBudget = _categoryYearBudget;
    this.tagAllocations = _tagAllocations;
    this.grantTypeAllocations = _grantTypeAllocations;
    this.customGrantTypeAllocations = _customGrantTypeAllocations;
    this.awardStatistics = _awardStatistics;
  }
}

class FormBuilder {
  elements: FormItem[];
  title: string;
  submitButtonText: string;

  constructor(
    _elements: FormItem[],
    _title: string,
    _submitButtonText: string
  ) {
    this.elements = _elements;
    this.title = _title;
    this.submitButtonText = _submitButtonText;
  }
}

class FoundationTagAllocation {
  tag: string;
  amount: number;
  percentage: number;
  nonprofitAmounts: NonprofitAmount[];

  constructor(
    _tag: string,
    _amount: number,
    _percentage: number,
    _nonprofitAmounts: NonprofitAmount[]
  ) {
    this.tag = _tag;
    this.amount = _amount;
    this.percentage = _percentage;
    this.nonprofitAmounts = _nonprofitAmounts;
  }
}

class GrantAdditionalInfo {
  entities: GrantAdditionalInfoEntity[];
  grantRefereeInfo: GrantRefereeInfo;
  commentsDisabled: boolean;
  customGrantTypeId: string;

  constructor(
    _entities: GrantAdditionalInfoEntity[],
    _grantRefereeInfo: GrantRefereeInfo,
    _commentsDisabled: boolean,
    _customGrantTypeId: string
  ) {
    this.entities = _entities;
    this.grantRefereeInfo = _grantRefereeInfo;
    this.commentsDisabled = _commentsDisabled;
    this.customGrantTypeId = _customGrantTypeId;
  }
}

class GrantAdditionalInfoEntity {
  type: "TEXT" | "FILE";
  response: string;
  fileId: string;

  constructor(_type: "TEXT" | "FILE", _response: string, _fileId: string) {
    this.type = _type;
    this.response = _response;
    this.fileId = _fileId;
  }
}

class GrantAmount {
  minAmount: number;
  maxAmount: number;

  constructor(_minAmount: number, _maxAmount: number) {
    this.minAmount = _minAmount;
    this.maxAmount = _maxAmount;
  }
}

class GrantDuration {
  start: string;
  end: string;

  constructor(_start: string, _end: string) {
    this.start = _start;
    this.end = _end;
  }
}

class GrantEligibility {
  templateId: string;
  components: FormItem[];

  constructor(_templateId: string, _components: FormItem[]) {
    this.templateId = _templateId;
    this.components = _components;
  }
}

class GrantFormAdditionalInfo {
  grantRefereeConfig: GrantRefereeConfig;
  commentsDisabled: boolean;
  previewDisabled: boolean;
  eligibleNonprofitTypes: string[];
  customGrantTypeId: string;
  welcomeText: TipTapTextBlock;
  openAt: string;

  constructor(
    _grantRefereeConfig: GrantRefereeConfig,
    _commentsDisabled: boolean,
    _previewDisabled: boolean,
    _eligibleNonprofitTypes: string[],
    _customGrantTypeId: string,
    _welcomeText: TipTapTextBlock,
    _openAt: string
  ) {
    this.grantRefereeConfig = _grantRefereeConfig;
    this.commentsDisabled = _commentsDisabled;
    this.previewDisabled = _previewDisabled;
    this.eligibleNonprofitTypes = _eligibleNonprofitTypes;
    this.customGrantTypeId = _customGrantTypeId;
    this.welcomeText = _welcomeText;
    this.openAt = _openAt;
  }
}

class GrantFormProposal {
  id: string;
  name: string;
  description: string;
  foundationId: string;
  status: "DRAFT" | "PUBLISHED" | "INACTIVE";
  grantAmount: GrantAmount;
  grantType:
    | "OPERATING_GRANT"
    | "PROJECT_GRANT"
    | "CAPITAL_GRANT"
    | "FELLOWSHIP"
    | "IN_KIND_GIVING";
  tags: string[];
  deadline: string;
  duration: GrantDuration;
  foundationOwner: string;
  pipelineId: string;
  eligibility: GrantEligibility;
  scoringCriteria: ScoringCriteria;
  additionalInfo: GrantFormAdditionalInfo;
  visibility: "PUBLIC" | "PRIVATE";
  form: FormBuilder;
  createdBy: string;
  updatedBy: string;
  created: string;
  updated: string;
  foundation: Foundation;
  createdByUser: FoundationUser;
  updatedByUser: FoundationUser;
  coloredTags: FoundationMetadataTag[];
  customGrantType: CustomGrantType;
  eligibilityEnabled: boolean;

  constructor(
    _id: string,
    _name: string,
    _description: string,
    _foundationId: string,
    _status: "DRAFT" | "PUBLISHED" | "INACTIVE",
    _grantAmount: GrantAmount,
    _grantType:
      | "OPERATING_GRANT"
      | "PROJECT_GRANT"
      | "CAPITAL_GRANT"
      | "FELLOWSHIP"
      | "IN_KIND_GIVING",
    _tags: string[],
    _deadline: string,
    _duration: GrantDuration,
    _foundationOwner: string,
    _pipelineId: string,
    _eligibility: GrantEligibility,
    _scoringCriteria: ScoringCriteria,
    _additionalInfo: GrantFormAdditionalInfo,
    _visibility: "PUBLIC" | "PRIVATE",
    _form: FormBuilder,
    _createdBy: string,
    _updatedBy: string,
    _created: string,
    _updated: string,
    _foundation: Foundation,
    _createdByUser: FoundationUser,
    _updatedByUser: FoundationUser,
    _coloredTags: FoundationMetadataTag[],
    _customGrantType: CustomGrantType,
    _eligibilityEnabled: boolean
  ) {
    this.id = _id;
    this.name = _name;
    this.description = _description;
    this.foundationId = _foundationId;
    this.status = _status;
    this.grantAmount = _grantAmount;
    this.grantType = _grantType;
    this.tags = _tags;
    this.deadline = _deadline;
    this.duration = _duration;
    this.foundationOwner = _foundationOwner;
    this.pipelineId = _pipelineId;
    this.eligibility = _eligibility;
    this.scoringCriteria = _scoringCriteria;
    this.additionalInfo = _additionalInfo;
    this.visibility = _visibility;
    this.form = _form;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.created = _created;
    this.updated = _updated;
    this.foundation = _foundation;
    this.createdByUser = _createdByUser;
    this.updatedByUser = _updatedByUser;
    this.coloredTags = _coloredTags;
    this.customGrantType = _customGrantType;
    this.eligibilityEnabled = _eligibilityEnabled;
  }
}

class GrantPayment {
  id: string;
  nonprofitId: string;
  foundationId: string;
  assigneeId: string;
  amount: number;
  type: "ACH" | "CHECK" | "WIRE" | "STOCK" | "CREDIT_CARD";
  dueDate: string;
  contingencies: string;
  comments: string[];
  status: "NOT_STARTED" | "CONTINGENT" | "SENT" | "ISSUED" | "CLEARED";
  sourceType: "GRANT" | "CRM";
  sourceId: string;
  additionalInfo: PaymentAdditionalInfo;
  active: boolean;
  createdBy: string;
  updatedBy: string;
  created: string;
  updated: string;
  submission: GrantProposalSubmission;
  nonprofit: Nonprofit;
  assignee: FoundationUser;

  constructor(
    _id: string,
    _nonprofitId: string,
    _foundationId: string,
    _assigneeId: string,
    _amount: number,
    _type: "ACH" | "CHECK" | "WIRE" | "STOCK" | "CREDIT_CARD",
    _dueDate: string,
    _contingencies: string,
    _comments: string[],
    _status: "NOT_STARTED" | "CONTINGENT" | "SENT" | "ISSUED" | "CLEARED",
    _sourceType: "GRANT" | "CRM",
    _sourceId: string,
    _additionalInfo: PaymentAdditionalInfo,
    _active: boolean,
    _createdBy: string,
    _updatedBy: string,
    _created: string,
    _updated: string,
    _submission: GrantProposalSubmission,
    _nonprofit: Nonprofit,
    _assignee: FoundationUser
  ) {
    this.id = _id;
    this.nonprofitId = _nonprofitId;
    this.foundationId = _foundationId;
    this.assigneeId = _assigneeId;
    this.amount = _amount;
    this.type = _type;
    this.dueDate = _dueDate;
    this.contingencies = _contingencies;
    this.comments = _comments;
    this.status = _status;
    this.sourceType = _sourceType;
    this.sourceId = _sourceId;
    this.additionalInfo = _additionalInfo;
    this.active = _active;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.created = _created;
    this.updated = _updated;
    this.submission = _submission;
    this.nonprofit = _nonprofit;
    this.assignee = _assignee;
  }
}

class GrantPaymentSummary {
  completedGrantPayments: GrantPayment[];
  incompleteGrantPayments: GrantPayment[];
  amountPaid: number;
  upcomingAmount: number;
  unallocatedAmount: number;
  finishedAllPayments: boolean;

  constructor(
    _completedGrantPayments: GrantPayment[],
    _incompleteGrantPayments: GrantPayment[],
    _amountPaid: number,
    _upcomingAmount: number,
    _unallocatedAmount: number,
    _finishedAllPayments: boolean
  ) {
    this.completedGrantPayments = _completedGrantPayments;
    this.incompleteGrantPayments = _incompleteGrantPayments;
    this.amountPaid = _amountPaid;
    this.upcomingAmount = _upcomingAmount;
    this.unallocatedAmount = _unallocatedAmount;
    this.finishedAllPayments = _finishedAllPayments;
  }
}

class GrantProposalSubmission {
  id: string;
  name: string;
  foundationId: string;
  nonprofitId: string;
  grantFormProposal: string;
  grantAmount: GrantAmount;
  awardedAmount: number;
  awardedDate: string;
  grantType:
    | "OPERATING_GRANT"
    | "PROJECT_GRANT"
    | "CAPITAL_GRANT"
    | "FELLOWSHIP"
    | "IN_KIND_GIVING";
  tags: string[];
  deadline: string;
  duration: GrantDuration;
  foundationOwner: string;
  additionalInfo: GrantAdditionalInfo;
  stage: string;
  pipelineId: string;
  watchers: string[];
  createdBy: string;
  updatedBy: string;
  created: string;
  updated: string;
  firstFormDetails: FirstFormDetails;
  purpose: string;
  submittable: boolean;
  assigneesToTask: string[];
  externalAssigneesToTask: string[];
  assigneeToTaskTemplates: TaskTemplateAssignee[];
  taskDeadline: string;
  organizationName: string;
  entityType: "ORGANIZATION" | "INDIVIDUAL";
  recipientEmail: string;
  sendProposalCreatedEmail: boolean;
  customEmailTemplate: CustomEmailTemplate;
  disableStageChange: boolean;
  responses: FormItemResponseEntity[];
  submissionIndividual: string;
  submitted: string;
  multiForm: MultipleFormInfo;
  taskIds: string[];
  taskAssignees: string[];
  readyForNextStage: boolean;
  nonprofit: Nonprofit;
  formProposal: GrantFormProposal;
  foundationOwnerUser: FoundationUser;
  foundationTaskAssignees: FoundationUser[];
  nonprofitTaskAssignees: NonprofitUser[];
  foundationWatchers: FoundationUser[];
  coloredTags: FoundationMetadataTag[];
  updatedByFoundationUser: FoundationUser;
  updatedByNonprofitUser: NonprofitUser;
  foundation: Foundation;
  nonprofitStage:
    | "VETTING"
    | "DRAFT"
    | "SUBMITTED"
    | "REVIEW"
    | "PENDING"
    | "APPROVED"
    | "CONTRACT"
    | "PAYMENT"
    | "REPORTING"
    | "AWARDED"
    | "DENIED";
  pipelineInfo: Pipeline;
  customGrantType: CustomGrantType;
  paymentSummary: GrantPaymentSummary;

  constructor(
    _id: string,
    _name: string,
    _foundationId: string,
    _nonprofitId: string,
    _grantFormProposal: string,
    _grantAmount: GrantAmount,
    _awardedAmount: number,
    _awardedDate: string,
    _grantType:
      | "OPERATING_GRANT"
      | "PROJECT_GRANT"
      | "CAPITAL_GRANT"
      | "FELLOWSHIP"
      | "IN_KIND_GIVING",
    _tags: string[],
    _deadline: string,
    _duration: GrantDuration,
    _foundationOwner: string,
    _additionalInfo: GrantAdditionalInfo,
    _stage: string,
    _pipelineId: string,
    _watchers: string[],
    _createdBy: string,
    _updatedBy: string,
    _created: string,
    _updated: string,
    _firstFormDetails: FirstFormDetails,
    _purpose: string,
    _submittable: boolean,
    _assigneesToTask: string[],
    _externalAssigneesToTask: string[],
    _assigneeToTaskTemplates: TaskTemplateAssignee[],
    _taskDeadline: string,
    _organizationName: string,
    _entityType: "ORGANIZATION" | "INDIVIDUAL",
    _recipientEmail: string,
    _sendProposalCreatedEmail: boolean,
    _customEmailTemplate: CustomEmailTemplate,
    _disableStageChange: boolean,
    _responses: FormItemResponseEntity[],
    _submissionIndividual: string,
    _submitted: string,
    _multiForm: MultipleFormInfo,
    _taskIds: string[],
    _taskAssignees: string[],
    _readyForNextStage: boolean,
    _nonprofit: Nonprofit,
    _formProposal: GrantFormProposal,
    _foundationOwnerUser: FoundationUser,
    _foundationTaskAssignees: FoundationUser[],
    _nonprofitTaskAssignees: NonprofitUser[],
    _foundationWatchers: FoundationUser[],
    _coloredTags: FoundationMetadataTag[],
    _updatedByFoundationUser: FoundationUser,
    _updatedByNonprofitUser: NonprofitUser,
    _foundation: Foundation,
    _nonprofitStage:
      | "VETTING"
      | "DRAFT"
      | "SUBMITTED"
      | "REVIEW"
      | "PENDING"
      | "APPROVED"
      | "CONTRACT"
      | "PAYMENT"
      | "REPORTING"
      | "AWARDED"
      | "DENIED",
    _pipelineInfo: Pipeline,
    _customGrantType: CustomGrantType,
    _paymentSummary: GrantPaymentSummary
  ) {
    this.id = _id;
    this.name = _name;
    this.foundationId = _foundationId;
    this.nonprofitId = _nonprofitId;
    this.grantFormProposal = _grantFormProposal;
    this.grantAmount = _grantAmount;
    this.awardedAmount = _awardedAmount;
    this.awardedDate = _awardedDate;
    this.grantType = _grantType;
    this.tags = _tags;
    this.deadline = _deadline;
    this.duration = _duration;
    this.foundationOwner = _foundationOwner;
    this.additionalInfo = _additionalInfo;
    this.stage = _stage;
    this.pipelineId = _pipelineId;
    this.watchers = _watchers;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.created = _created;
    this.updated = _updated;
    this.firstFormDetails = _firstFormDetails;
    this.purpose = _purpose;
    this.submittable = _submittable;
    this.assigneesToTask = _assigneesToTask;
    this.externalAssigneesToTask = _externalAssigneesToTask;
    this.assigneeToTaskTemplates = _assigneeToTaskTemplates;
    this.taskDeadline = _taskDeadline;
    this.organizationName = _organizationName;
    this.entityType = _entityType;
    this.recipientEmail = _recipientEmail;
    this.sendProposalCreatedEmail = _sendProposalCreatedEmail;
    this.customEmailTemplate = _customEmailTemplate;
    this.disableStageChange = _disableStageChange;
    this.responses = _responses;
    this.submissionIndividual = _submissionIndividual;
    this.submitted = _submitted;
    this.multiForm = _multiForm;
    this.taskIds = _taskIds;
    this.taskAssignees = _taskAssignees;
    this.readyForNextStage = _readyForNextStage;
    this.nonprofit = _nonprofit;
    this.formProposal = _formProposal;
    this.foundationOwnerUser = _foundationOwnerUser;
    this.foundationTaskAssignees = _foundationTaskAssignees;
    this.nonprofitTaskAssignees = _nonprofitTaskAssignees;
    this.foundationWatchers = _foundationWatchers;
    this.coloredTags = _coloredTags;
    this.updatedByFoundationUser = _updatedByFoundationUser;
    this.updatedByNonprofitUser = _updatedByNonprofitUser;
    this.foundation = _foundation;
    this.nonprofitStage = _nonprofitStage;
    this.pipelineInfo = _pipelineInfo;
    this.customGrantType = _customGrantType;
    this.paymentSummary = _paymentSummary;
  }
}

class GrantRefereeConfig {
  granteeRequestConfigs: GrantRefereeRequestConfig[];

  constructor(_granteeRequestConfigs: GrantRefereeRequestConfig[]) {
    this.granteeRequestConfigs = _granteeRequestConfigs;
  }
}

class GrantRefereeInfo {
  grantRefereeRequestDetails: GrantRefereeRequestDetail[];

  constructor(_grantRefereeRequestDetails: GrantRefereeRequestDetail[]) {
    this.grantRefereeRequestDetails = _grantRefereeRequestDetails;
  }
}

class GrantRefereeRequestConfig {
  taskTemplate: TaskTemplate;
  title: string;
  description: string;
  disableLogin: boolean;

  constructor(
    _taskTemplate: TaskTemplate,
    _title: string,
    _description: string,
    _disableLogin: boolean
  ) {
    this.taskTemplate = _taskTemplate;
    this.title = _title;
    this.description = _description;
    this.disableLogin = _disableLogin;
  }
}

class GrantRefereeRequestDetail {
  requestConfig: GrantRefereeRequestConfig;
  recipientEmail: string;
  lastSent: string;
  taskId: string;
  sendEmail: boolean;

  constructor(
    _requestConfig: GrantRefereeRequestConfig,
    _recipientEmail: string,
    _lastSent: string,
    _taskId: string,
    _sendEmail: boolean
  ) {
    this.requestConfig = _requestConfig;
    this.recipientEmail = _recipientEmail;
    this.lastSent = _lastSent;
    this.taskId = _taskId;
    this.sendEmail = _sendEmail;
  }
}

class GrantTypeAllocation {
  grantType:
    | "OPERATING_GRANT"
    | "PROJECT_GRANT"
    | "CAPITAL_GRANT"
    | "FELLOWSHIP"
    | "IN_KIND_GIVING";
  amount: number;
  percentage: number;
  nonprofitAmounts: NonprofitAmount[];

  constructor(
    _grantType:
      | "OPERATING_GRANT"
      | "PROJECT_GRANT"
      | "CAPITAL_GRANT"
      | "FELLOWSHIP"
      | "IN_KIND_GIVING",
    _amount: number,
    _percentage: number,
    _nonprofitAmounts: NonprofitAmount[]
  ) {
    this.grantType = _grantType;
    this.amount = _amount;
    this.percentage = _percentage;
    this.nonprofitAmounts = _nonprofitAmounts;
  }
}

class GrantTypeYOYData {
  grantType:
    | "OPERATING_GRANT"
    | "PROJECT_GRANT"
    | "CAPITAL_GRANT"
    | "FELLOWSHIP"
    | "IN_KIND_GIVING";
  yearlyData: YearlyData[];

  constructor(
    _grantType:
      | "OPERATING_GRANT"
      | "PROJECT_GRANT"
      | "CAPITAL_GRANT"
      | "FELLOWSHIP"
      | "IN_KIND_GIVING",
    _yearlyData: YearlyData[]
  ) {
    this.grantType = _grantType;
    this.yearlyData = _yearlyData;
  }
}

class MultiFormResponse {
  responses: FormItemResponseEntity[];
  formProposalId: string;
  formTitle: string;
  submissionIndividual: string;
  submitted: string;
  internal: boolean;
  deadline: string;

  constructor(
    _responses: FormItemResponseEntity[],
    _formProposalId: string,
    _formTitle: string,
    _submissionIndividual: string,
    _submitted: string,
    _internal: boolean,
    _deadline: string
  ) {
    this.responses = _responses;
    this.formProposalId = _formProposalId;
    this.formTitle = _formTitle;
    this.submissionIndividual = _submissionIndividual;
    this.submitted = _submitted;
    this.internal = _internal;
    this.deadline = _deadline;
  }
}

class MultipleFormInfo {
  multiFormResponses: MultiFormResponse[];

  constructor(_multiFormResponses: MultiFormResponse[]) {
    this.multiFormResponses = _multiFormResponses;
  }
}

class NonprofitAmount {
  nonprofit: Nonprofit;
  amount: number;

  constructor(_nonprofit: Nonprofit, _amount: number) {
    this.nonprofit = _nonprofit;
    this.amount = _amount;
  }
}

class PaymentAdditionalInfo {
  budgetCategory: string;
  localCurrencyAmount: number;
  localCurrency: Currency;
  description: string;
  overrideTags: string[];
  overrideGrantType:
    | "OPERATING_GRANT"
    | "PROJECT_GRANT"
    | "CAPITAL_GRANT"
    | "FELLOWSHIP"
    | "IN_KIND_GIVING";
  overrideCustomGrantType: string;
  qbPaymentDetails: QBPaymentDetails;
  additionalFields: any;

  constructor(
    _budgetCategory: string,
    _localCurrencyAmount: number,
    _localCurrency: Currency,
    _description: string,
    _overrideTags: string[],
    _overrideGrantType:
      | "OPERATING_GRANT"
      | "PROJECT_GRANT"
      | "CAPITAL_GRANT"
      | "FELLOWSHIP"
      | "IN_KIND_GIVING",
    _overrideCustomGrantType: string,
    _qbPaymentDetails: QBPaymentDetails,
    _additionalFields: any
  ) {
    this.budgetCategory = _budgetCategory;
    this.localCurrencyAmount = _localCurrencyAmount;
    this.localCurrency = _localCurrency;
    this.description = _description;
    this.overrideTags = _overrideTags;
    this.overrideGrantType = _overrideGrantType;
    this.overrideCustomGrantType = _overrideCustomGrantType;
    this.qbPaymentDetails = _qbPaymentDetails;
    this.additionalFields = _additionalFields;
  }
}

class QBPaymentDetails {
  billId: string;
  vendorId: string;

  constructor(_billId: string, _vendorId: string) {
    this.billId = _billId;
    this.vendorId = _vendorId;
  }
}

class TagYOYData {
  tag: string;
  yearlyData: YearlyData[];

  constructor(_tag: string, _yearlyData: YearlyData[]) {
    this.tag = _tag;
    this.yearlyData = _yearlyData;
  }
}

class TaskTemplateAssignee {
  taskTemplateId: string;
  assigneeIds: string[];

  constructor(_taskTemplateId: string, _assigneeIds: string[]) {
    this.taskTemplateId = _taskTemplateId;
    this.assigneeIds = _assigneeIds;
  }
}

class TipTapAttrs {
  id: string;
  label: string;
  level: number;
  textAlign: string;
  color: string;
  fontFamily: string;
  fontSize: string;
  src: string;
  height: number;
  width: number;
  alt: string;
  fileId: string;
  class: string;
  href: string;
  ref: string;
  target: string;

  constructor(
    _id: string,
    _label: string,
    _level: number,
    _textAlign: string,
    _color: string,
    _fontFamily: string,
    _fontSize: string,
    _src: string,
    _height: number,
    _width: number,
    _alt: string,
    _fileId: string,
    _class: string,
    _href: string,
    _ref: string,
    _target: string
  ) {
    this.id = _id;
    this.label = _label;
    this.level = _level;
    this.textAlign = _textAlign;
    this.color = _color;
    this.fontFamily = _fontFamily;
    this.fontSize = _fontSize;
    this.src = _src;
    this.height = _height;
    this.width = _width;
    this.alt = _alt;
    this.fileId = _fileId;
    this.class = _class;
    this.href = _href;
    this.ref = _ref;
    this.target = _target;
  }
}

class TipTapTextBlock {
  type: string;
  content: TipTapTextBlock[];
  text: string;
  marks: TipTapTextBlock[];
  attrs: TipTapAttrs;

  constructor(
    _type: string,
    _content: TipTapTextBlock[],
    _text: string,
    _marks: TipTapTextBlock[],
    _attrs: TipTapAttrs
  ) {
    this.type = _type;
    this.content = _content;
    this.text = _text;
    this.marks = _marks;
    this.attrs = _attrs;
  }
}

class YOYData {
  years: FiscalRange[];
  budgetYOYData: BudgetCategoryYOYData[];
  tagYOYData: TagYOYData[];
  grantTypeYOYData: GrantTypeYOYData[];
  customGrantTypeYOYData: CustomGrantTypeYOYData[];

  constructor(
    _years: FiscalRange[],
    _budgetYOYData: BudgetCategoryYOYData[],
    _tagYOYData: TagYOYData[],
    _grantTypeYOYData: GrantTypeYOYData[],
    _customGrantTypeYOYData: CustomGrantTypeYOYData[]
  ) {
    this.years = _years;
    this.budgetYOYData = _budgetYOYData;
    this.tagYOYData = _tagYOYData;
    this.grantTypeYOYData = _grantTypeYOYData;
    this.customGrantTypeYOYData = _customGrantTypeYOYData;
  }
}

class YearlyData {
  range: FiscalRange;
  amount: number;
  percentage: number;

  constructor(_range: FiscalRange, _amount: number, _percentage: number) {
    this.range = _range;
    this.amount = _amount;
    this.percentage = _percentage;
  }
}

class AggregateExecDashboardRequest {
  foundationIds: string[];
  startDate: string;
  endDate: string;

  constructor(_foundationIds: string[], _startDate: string, _endDate: string) {
    this.foundationIds = _foundationIds;
    this.startDate = _startDate;
    this.endDate = _endDate;
  }
}

class AggregateUniversalFoundationSearchResponse {
  foundation: Foundation;
  responses: FoundationSearchResponseEntity[];

  constructor(
    _foundation: Foundation,
    _responses: FoundationSearchResponseEntity[]
  ) {
    this.foundation = _foundation;
    this.responses = _responses;
  }
}

class AggregateUniversalSearchResponse {
  foundationResults: AggregateUniversalFoundationSearchResponse[];

  constructor(
    _foundationResults: AggregateUniversalFoundationSearchResponse[]
  ) {
    this.foundationResults = _foundationResults;
  }
}

class CRMSubmissionDetails {
  submissionName: string;
  awardedAmount: number;
  awardedDate: string;
  purpose: string;
  tags: string[];
  duration: GrantDuration;
  stage: string;
  pipelineId: string;

  constructor(
    _submissionName: string,
    _awardedAmount: number,
    _awardedDate: string,
    _purpose: string,
    _tags: string[],
    _duration: GrantDuration,
    _stage: string,
    _pipelineId: string
  ) {
    this.submissionName = _submissionName;
    this.awardedAmount = _awardedAmount;
    this.awardedDate = _awardedDate;
    this.purpose = _purpose;
    this.tags = _tags;
    this.duration = _duration;
    this.stage = _stage;
    this.pipelineId = _pipelineId;
  }
}

class FoundationNonprofitMetadata {
  foundationId: string;
  nonprofitId: string;
  dba: string;
  phoneNumber: string;
  mission: string;
  vision: string;
  hasFiscalSponsor: boolean;
  fiscalSponsor: FiscalSponsor;
  orgEmail: string;
  organizationName: string;
  totalAwarded: number;
  tags: string[];
  statuses: string[];
  foundationPOC: FoundationUser;
  nextPaymentDate: string;
  description: string;
  ein: string;
  legalName: string;
  entityType: "ORGANIZATION" | "INDIVIDUAL";
  primaryContact: NonprofitUser;
  website: string;
  headquarters: Address;
  mailingAddress: Address;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedIn: string;
  guidestarProfile: string;
  legalStatus: string;
  foundingDate: string;
  irsDeterminationLetter: string;
  irsRecipientStatus:
    | "PF"
    | "POF"
    | "EOF"
    | "PC"
    | "GOV"
    | "SO_DP"
    | "SO_I"
    | "SO_II"
    | "SO_III_FI"
    | "SO_III_NFI"
    | "TPS"
    | "NC"
    | "I";
  customFields: any;
  interactionAdditionalInfo: InteractionAdditionalInfo;
  coloredTags: FoundationMetadataTag[];
  ofacFlags: OfacFlags;
  sendEmail: boolean;
  additionalInfo: NonprofitAdditionalInfo;
  organizationLogo: string;
  submissionDetails: CRMSubmissionDetails[];

  constructor(
    _foundationId: string,
    _nonprofitId: string,
    _dba: string,
    _phoneNumber: string,
    _mission: string,
    _vision: string,
    _hasFiscalSponsor: boolean,
    _fiscalSponsor: FiscalSponsor,
    _orgEmail: string,
    _organizationName: string,
    _totalAwarded: number,
    _tags: string[],
    _statuses: string[],
    _foundationPOC: FoundationUser,
    _nextPaymentDate: string,
    _description: string,
    _ein: string,
    _legalName: string,
    _entityType: "ORGANIZATION" | "INDIVIDUAL",
    _primaryContact: NonprofitUser,
    _website: string,
    _headquarters: Address,
    _mailingAddress: Address,
    _facebook: string,
    _twitter: string,
    _instagram: string,
    _linkedIn: string,
    _guidestarProfile: string,
    _legalStatus: string,
    _foundingDate: string,
    _irsDeterminationLetter: string,
    _irsRecipientStatus:
      | "PF"
      | "POF"
      | "EOF"
      | "PC"
      | "GOV"
      | "SO_DP"
      | "SO_I"
      | "SO_II"
      | "SO_III_FI"
      | "SO_III_NFI"
      | "TPS"
      | "NC"
      | "I",
    _customFields: any,
    _interactionAdditionalInfo: InteractionAdditionalInfo,
    _coloredTags: FoundationMetadataTag[],
    _ofacFlags: OfacFlags,
    _sendEmail: boolean,
    _additionalInfo: NonprofitAdditionalInfo,
    _organizationLogo: string,
    _submissionDetails: CRMSubmissionDetails[]
  ) {
    this.foundationId = _foundationId;
    this.nonprofitId = _nonprofitId;
    this.dba = _dba;
    this.phoneNumber = _phoneNumber;
    this.mission = _mission;
    this.vision = _vision;
    this.hasFiscalSponsor = _hasFiscalSponsor;
    this.fiscalSponsor = _fiscalSponsor;
    this.orgEmail = _orgEmail;
    this.organizationName = _organizationName;
    this.totalAwarded = _totalAwarded;
    this.tags = _tags;
    this.statuses = _statuses;
    this.foundationPOC = _foundationPOC;
    this.nextPaymentDate = _nextPaymentDate;
    this.description = _description;
    this.ein = _ein;
    this.legalName = _legalName;
    this.entityType = _entityType;
    this.primaryContact = _primaryContact;
    this.website = _website;
    this.headquarters = _headquarters;
    this.mailingAddress = _mailingAddress;
    this.facebook = _facebook;
    this.twitter = _twitter;
    this.instagram = _instagram;
    this.linkedIn = _linkedIn;
    this.guidestarProfile = _guidestarProfile;
    this.legalStatus = _legalStatus;
    this.foundingDate = _foundingDate;
    this.irsDeterminationLetter = _irsDeterminationLetter;
    this.irsRecipientStatus = _irsRecipientStatus;
    this.customFields = _customFields;
    this.interactionAdditionalInfo = _interactionAdditionalInfo;
    this.coloredTags = _coloredTags;
    this.ofacFlags = _ofacFlags;
    this.sendEmail = _sendEmail;
    this.additionalInfo = _additionalInfo;
    this.organizationLogo = _organizationLogo;
    this.submissionDetails = _submissionDetails;
  }
}

class FoundationSearchResponseEntity {
  responseType: "NONPROFIT" | "NONPROFIT_USER" | "GRANT_SUBMISSION";
  nonprofitMetadata: FoundationNonprofitMetadata;
  nonprofitUser: NonprofitUser;
  submission: GrantProposalSubmission;

  constructor(
    _responseType: "NONPROFIT" | "NONPROFIT_USER" | "GRANT_SUBMISSION",
    _nonprofitMetadata: FoundationNonprofitMetadata,
    _nonprofitUser: NonprofitUser,
    _submission: GrantProposalSubmission
  ) {
    this.responseType = _responseType;
    this.nonprofitMetadata = _nonprofitMetadata;
    this.nonprofitUser = _nonprofitUser;
    this.submission = _submission;
  }
}

class AggregateUniversalSearchQuery {
  foundationIds: string[];
  queryText: string;

  constructor(_foundationIds: string[], _queryText: string) {
    this.foundationIds = _foundationIds;
    this.queryText = _queryText;
  }
}

class AggregateContactResponse {
  foundationContacts: AggregateFoundationCRMResponse[];

  constructor(_foundationContacts: AggregateFoundationCRMResponse[]) {
    this.foundationContacts = _foundationContacts;
  }
}

class AggregateFoundationCRMResponse {
  foundation: Foundation;
  responses: FoundationNonprofitMetadata[];

  constructor(
    _foundation: Foundation,
    _responses: FoundationNonprofitMetadata[]
  ) {
    this.foundation = _foundation;
    this.responses = _responses;
  }
}

class AggregateContactSearchRequest {
  foundationIds: string[];

  constructor(_foundationIds: string[]) {
    this.foundationIds = _foundationIds;
  }
}

class AggregateDashboardResponse {
  yourTasks: Task[];
  granteeTasks: Task[];
  foundationProposalSummary: AggregateFoundationProposalSummary[];
  payments: GrantPayment[];

  constructor(
    _yourTasks: Task[],
    _granteeTasks: Task[],
    _foundationProposalSummary: AggregateFoundationProposalSummary[],
    _payments: GrantPayment[]
  ) {
    this.yourTasks = _yourTasks;
    this.granteeTasks = _granteeTasks;
    this.foundationProposalSummary = _foundationProposalSummary;
    this.payments = _payments;
  }
}

class AggregateFoundationProposalSummary {
  foundation: Foundation;
  pipelineProposalSummaries: PipelineProposalSummary[];

  constructor(
    _foundation: Foundation,
    _pipelineProposalSummaries: PipelineProposalSummary[]
  ) {
    this.foundation = _foundation;
    this.pipelineProposalSummaries = _pipelineProposalSummaries;
  }
}

class AggregateGrantAnalysis {
  totalAmountRequested: number;
  totalAmountAwarded: number;

  constructor(_totalAmountRequested: number, _totalAmountAwarded: number) {
    this.totalAmountRequested = _totalAmountRequested;
    this.totalAmountAwarded = _totalAmountAwarded;
  }
}

class AnvilPDFFieldResponse {
  anvilPDFField: AnvilPDFField;
  response: string;

  constructor(_anvilPDFField: AnvilPDFField, _response: string) {
    this.anvilPDFField = _anvilPDFField;
    this.response = _response;
  }
}

class AnvilPDFFieldResponses {
  anvilPDfFieldResponses: AnvilPDFFieldResponse[];

  constructor(_anvilPDfFieldResponses: AnvilPDFFieldResponse[]) {
    this.anvilPDfFieldResponses = _anvilPDfFieldResponses;
  }
}

class AnvilPaymentDetails {
  bankName: string;
  accountNumber: string;
  routingNumber: string;
  wireRoutingNumber: string;
  entityName: string;
  submittedDate: string;
  submittedUser: string;

  constructor(
    _bankName: string,
    _accountNumber: string,
    _routingNumber: string,
    _wireRoutingNumber: string,
    _entityName: string,
    _submittedDate: string,
    _submittedUser: string
  ) {
    this.bankName = _bankName;
    this.accountNumber = _accountNumber;
    this.routingNumber = _routingNumber;
    this.wireRoutingNumber = _wireRoutingNumber;
    this.entityName = _entityName;
    this.submittedDate = _submittedDate;
    this.submittedUser = _submittedUser;
  }
}

class DonorActivity {
  id: string;
  foundationId: string;
  donorEntityId: string;
  details: string;
  additionalInfo: DonorActivityAdditionalInfo;
  type: string;
  createdAt: string;
  participants: string[];
  created: string;
  updated: string;

  constructor(
    _id: string,
    _foundationId: string,
    _donorEntityId: string,
    _details: string,
    _additionalInfo: DonorActivityAdditionalInfo,
    _type: string,
    _createdAt: string,
    _participants: string[],
    _created: string,
    _updated: string
  ) {
    this.id = _id;
    this.foundationId = _foundationId;
    this.donorEntityId = _donorEntityId;
    this.details = _details;
    this.additionalInfo = _additionalInfo;
    this.type = _type;
    this.createdAt = _createdAt;
    this.participants = _participants;
    this.created = _created;
    this.updated = _updated;
  }
}

class DonorActivityAdditionalInfo {
  note: TipTapTextBlock;

  constructor(_note: TipTapTextBlock) {
    this.note = _note;
  }
}

class DonorContribution {
  id: string;
  foundationId: string;
  contributedBy: string;
  amount: number;
  contributedAt: string;
  endDate: string;
  submissionIds: string[];
  tags: string[];
  created: string;
  updated: string;
  comments: DonorContributionComment[];
  tagList: DonorTag[];

  constructor(
    _id: string,
    _foundationId: string,
    _contributedBy: string,
    _amount: number,
    _contributedAt: string,
    _endDate: string,
    _submissionIds: string[],
    _tags: string[],
    _created: string,
    _updated: string,
    _comments: DonorContributionComment[],
    _tagList: DonorTag[]
  ) {
    this.id = _id;
    this.foundationId = _foundationId;
    this.contributedBy = _contributedBy;
    this.amount = _amount;
    this.contributedAt = _contributedAt;
    this.endDate = _endDate;
    this.submissionIds = _submissionIds;
    this.tags = _tags;
    this.created = _created;
    this.updated = _updated;
    this.comments = _comments;
    this.tagList = _tagList;
  }
}

class DonorContributionComment {
  id: string;
  donorContributionId: string;
  foundationId: string;
  comment: string;
  createById: string;
  createdAt: string;
  updatedById: string;
  updatedAt: string;
  createdByUser: UserDetails;
  updatedByUser: UserDetails;
  updated: string;

  constructor(
    _id: string,
    _donorContributionId: string,
    _foundationId: string,
    _comment: string,
    _createById: string,
    _createdAt: string,
    _updatedById: string,
    _updatedAt: string,
    _createdByUser: UserDetails,
    _updatedByUser: UserDetails,
    _updated: string
  ) {
    this.id = _id;
    this.donorContributionId = _donorContributionId;
    this.foundationId = _foundationId;
    this.comment = _comment;
    this.createById = _createById;
    this.createdAt = _createdAt;
    this.updatedById = _updatedById;
    this.updatedAt = _updatedAt;
    this.createdByUser = _createdByUser;
    this.updatedByUser = _updatedByUser;
    this.updated = _updated;
  }
}

class DonorData {
  label: string;
  value: string;

  constructor(_label: string, _value: string) {
    this.label = _label;
    this.value = _value;
  }
}

class DonorEntity {
  id: string;
  foundationId: string;
  type: string;
  name: string;
  data: DonorData[];
  tagIds: string[];
  nonprofitId: string;
  created: string;
  updated: string;
  totalContribution: number;
  tags: DonorTag[];
  relationships: DonorRelationship[];
  contributions: DonorContribution[];
  activities: DonorActivity[];

  constructor(
    _id: string,
    _foundationId: string,
    _type: string,
    _name: string,
    _data: DonorData[],
    _tagIds: string[],
    _nonprofitId: string,
    _created: string,
    _updated: string,
    _totalContribution: number,
    _tags: DonorTag[],
    _relationships: DonorRelationship[],
    _contributions: DonorContribution[],
    _activities: DonorActivity[]
  ) {
    this.id = _id;
    this.foundationId = _foundationId;
    this.type = _type;
    this.name = _name;
    this.data = _data;
    this.tagIds = _tagIds;
    this.nonprofitId = _nonprofitId;
    this.created = _created;
    this.updated = _updated;
    this.totalContribution = _totalContribution;
    this.tags = _tags;
    this.relationships = _relationships;
    this.contributions = _contributions;
    this.activities = _activities;
  }
}

class DonorRelationship {
  id: string;
  foundationId: string;
  fromEntityId: string;
  type: string;
  name: string;
  data: DonorData[];
  toEntityId: string;
  created: string;
  updated: string;
  fromEntity: DonorEntity;
  toEntity: DonorEntity;

  constructor(
    _id: string,
    _foundationId: string,
    _fromEntityId: string,
    _type: string,
    _name: string,
    _data: DonorData[],
    _toEntityId: string,
    _created: string,
    _updated: string,
    _fromEntity: DonorEntity,
    _toEntity: DonorEntity
  ) {
    this.id = _id;
    this.foundationId = _foundationId;
    this.fromEntityId = _fromEntityId;
    this.type = _type;
    this.name = _name;
    this.data = _data;
    this.toEntityId = _toEntityId;
    this.created = _created;
    this.updated = _updated;
    this.fromEntity = _fromEntity;
    this.toEntity = _toEntity;
  }
}

class DonorTag {
  id: string;
  displayName: string;
  foundationId: string;
  color: string;
  created: string;
  updated: string;

  constructor(
    _id: string,
    _displayName: string,
    _foundationId: string,
    _color: string,
    _created: string,
    _updated: string
  ) {
    this.id = _id;
    this.displayName = _displayName;
    this.foundationId = _foundationId;
    this.color = _color;
    this.created = _created;
    this.updated = _updated;
  }
}

class EntityDetails {
  name: string;

  constructor(_name: string) {
    this.name = _name;
  }
}

class FoundationProposalSummary {
  results: ProposalStageResult[];

  constructor(_results: ProposalStageResult[]) {
    this.results = _results;
  }
}

class GrantSubmissionSearchResponse {
  totalCount: number;
  responses: GrantProposalSubmission[];
  aggregateGrantAnalysis: AggregateGrantAnalysis;

  constructor(
    _totalCount: number,
    _responses: GrantProposalSubmission[],
    _aggregateGrantAnalysis: AggregateGrantAnalysis
  ) {
    this.totalCount = _totalCount;
    this.responses = _responses;
    this.aggregateGrantAnalysis = _aggregateGrantAnalysis;
  }
}

class PipelineProposalSummary {
  pipeline: Pipeline;
  proposalSummary: FoundationProposalSummary;

  constructor(
    _pipeline: Pipeline,
    _proposalSummary: FoundationProposalSummary
  ) {
    this.pipeline = _pipeline;
    this.proposalSummary = _proposalSummary;
  }
}

class ProposalStageResult {
  grantStage: GrantStage;
  response: GrantSubmissionSearchResponse;

  constructor(
    _grantStage: GrantStage,
    _response: GrantSubmissionSearchResponse
  ) {
    this.grantStage = _grantStage;
    this.response = _response;
  }
}

class SignatureOrder {
  id: string;
  signatureOrderType: "FOUNDATION_USER" | "NONPROFIT_USER";
  userId: string;
  signedDocumentFileId: string;

  constructor(
    _id: string,
    _signatureOrderType: "FOUNDATION_USER" | "NONPROFIT_USER",
    _userId: string,
    _signedDocumentFileId: string
  ) {
    this.id = _id;
    this.signatureOrderType = _signatureOrderType;
    this.userId = _userId;
    this.signedDocumentFileId = _signedDocumentFileId;
  }
}

class SignatureStatusDetails {
  orderList: SignatureOrder[];
  currentIndex: number;

  constructor(_orderList: SignatureOrder[], _currentIndex: number) {
    this.orderList = _orderList;
    this.currentIndex = _currentIndex;
  }
}

class TaskAdditionalInfo {
  envelopeId: string;
  lastRemindTime: string;
  agreementDocument: TipTapTextBlock;
  signatureRequired: boolean;
  signedDocumentFileId: string;
  signatureStatusDetails: SignatureStatusDetails;
  paymentDetailsPDFFileId: string;
  anvilPDFAdditionalInfo: AnvilPDFAdditionalInfo;
  noAuthAssigneeEmail: string;

  constructor(
    _envelopeId: string,
    _lastRemindTime: string,
    _agreementDocument: TipTapTextBlock,
    _signatureRequired: boolean,
    _signedDocumentFileId: string,
    _signatureStatusDetails: SignatureStatusDetails,
    _paymentDetailsPDFFileId: string,
    _anvilPDFAdditionalInfo: AnvilPDFAdditionalInfo,
    _noAuthAssigneeEmail: string
  ) {
    this.envelopeId = _envelopeId;
    this.lastRemindTime = _lastRemindTime;
    this.agreementDocument = _agreementDocument;
    this.signatureRequired = _signatureRequired;
    this.signedDocumentFileId = _signedDocumentFileId;
    this.signatureStatusDetails = _signatureStatusDetails;
    this.paymentDetailsPDFFileId = _paymentDetailsPDFFileId;
    this.anvilPDFAdditionalInfo = _anvilPDFAdditionalInfo;
    this.noAuthAssigneeEmail = _noAuthAssigneeEmail;
  }
}

class TaskSourceEntity {
  sourceType:
    | "CRM"
    | "GRANT_APPLICATION"
    | "REPORT"
    | "AGREEMENT_TEMPLATE"
    | "DONOR";
  sourceId: string;

  constructor(
    _sourceType:
      | "CRM"
      | "GRANT_APPLICATION"
      | "REPORT"
      | "AGREEMENT_TEMPLATE"
      | "DONOR",
    _sourceId: string
  ) {
    this.sourceType = _sourceType;
    this.sourceId = _sourceId;
  }
}

class UserDetails {
  user: AppUser;
  entityType: "FOUNDATION" | "NONPROFIT" | "EXTERNAL_REVIEWER";
  entityDetails: EntityDetails;

  constructor(
    _user: AppUser,
    _entityType: "FOUNDATION" | "NONPROFIT" | "EXTERNAL_REVIEWER",
    _entityDetails: EntityDetails
  ) {
    this.user = _user;
    this.entityType = _entityType;
    this.entityDetails = _entityDetails;
  }
}

class AggregateDashboardRequest {
  foundationIds: string[];

  constructor(_foundationIds: string[]) {
    this.foundationIds = _foundationIds;
  }
}

class DataColumn {
  columnType: "STRING" | "DATE" | "NUMBER" | "CURRENCY";
  headerName: string;

  constructor(
    _columnType: "STRING" | "DATE" | "NUMBER" | "CURRENCY",
    _headerName: string
  ) {
    this.columnType = _columnType;
    this.headerName = _headerName;
  }
}

class DataRow {
  row: any;

  constructor(_row: any) {
    this.row = _row;
  }
}

class DataSearchResponse {
  totalCount: number;
  columns: DataColumn[];
  rows: DataRow[];

  constructor(_totalCount: number, _columns: DataColumn[], _rows: DataRow[]) {
    this.totalCount = _totalCount;
    this.columns = _columns;
    this.rows = _rows;
  }
}

class AggregateDataSearchRequest {
  foundationIds: string[];
  reportType:
    | "PAYMENTS"
    | "SUBMISSIONS"
    | "DOLLARS_BY_BUDGET_CATEGORY"
    | "DOLLARS_BY_ORGANIZATION_TAGS"
    | "FULL_GRANTS_LIST"
    | "FULL_GRANTEE_CONTACT_LIST"
    | "ALL_DATA"
    | "REPORTS"
    | "REVIEW_TASKS"
    | "EXTERNAL_REVIEWER_TASKS"
    | "CONTACT_LIST"
    | "IRS_990_REPORT"
    | "CANDID_DEMOGRAPHICS"
    | "CRM_PROFILE"
    | "DONOR_MANAGEMENT_REPORT"
    | "DONOR_CONTRIBUTION";

  constructor(
    _foundationIds: string[],
    _reportType:
      | "PAYMENTS"
      | "SUBMISSIONS"
      | "DOLLARS_BY_BUDGET_CATEGORY"
      | "DOLLARS_BY_ORGANIZATION_TAGS"
      | "FULL_GRANTS_LIST"
      | "FULL_GRANTEE_CONTACT_LIST"
      | "ALL_DATA"
      | "REPORTS"
      | "REVIEW_TASKS"
      | "EXTERNAL_REVIEWER_TASKS"
      | "CONTACT_LIST"
      | "IRS_990_REPORT"
      | "CANDID_DEMOGRAPHICS"
      | "CRM_PROFILE"
      | "DONOR_MANAGEMENT_REPORT"
      | "DONOR_CONTRIBUTION"
  ) {
    this.foundationIds = _foundationIds;
    this.reportType = _reportType;
  }
}

class BoardProposalValues {
  boardProposalId: string;
  documentFieldResponse: DocumentFieldResponse[];

  constructor(
    _boardProposalId: string,
    _documentFieldResponse: DocumentFieldResponse[]
  ) {
    this.boardProposalId = _boardProposalId;
    this.documentFieldResponse = _documentFieldResponse;
  }
}

class DocumentFieldResponse {
  field: DocumentItem;
  value: string;

  constructor(_field: DocumentItem, _value: string) {
    this.field = _field;
    this.value = _value;
  }
}

class BoardBook {
  id: string;
  name: string;
  foundationId: string;
  createdBy: string;
  updatedBy: string;
  boardProposalIds: string[];
  summarySheet: BoardBookSummarySheet;
  active: boolean;
  created: string;
  updated: string;
  foundation: Foundation;
  boardProposals: BoardGrantProposal[];
  createdByUser: FoundationUser;
  updatedByUser: FoundationUser;

  constructor(
    _id: string,
    _name: string,
    _foundationId: string,
    _createdBy: string,
    _updatedBy: string,
    _boardProposalIds: string[],
    _summarySheet: BoardBookSummarySheet,
    _active: boolean,
    _created: string,
    _updated: string,
    _foundation: Foundation,
    _boardProposals: BoardGrantProposal[],
    _createdByUser: FoundationUser,
    _updatedByUser: FoundationUser
  ) {
    this.id = _id;
    this.name = _name;
    this.foundationId = _foundationId;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.boardProposalIds = _boardProposalIds;
    this.summarySheet = _summarySheet;
    this.active = _active;
    this.created = _created;
    this.updated = _updated;
    this.foundation = _foundation;
    this.boardProposals = _boardProposals;
    this.createdByUser = _createdByUser;
    this.updatedByUser = _updatedByUser;
  }
}

class BoardBookSummarySheet {
  columns: DocumentItem[];

  constructor(_columns: DocumentItem[]) {
    this.columns = _columns;
  }
}

class BoardGrantProposal {
  id: string;
  name: string;
  foundationId: string;
  nonprofitId: string;
  submissionId: string;
  createdBy: string;
  updatedBy: string;
  document: TipTapTextBlock;
  additionalInfo: BoardGrantProposalAdditionalInfo;
  created: string;
  updated: string;
  foundation: Foundation;
  nonprofit: Nonprofit;
  submission: GrantProposalSubmission;
  createdByUser: FoundationUser;
  updatedByUser: FoundationUser;
  boardBook: BoardBook;

  constructor(
    _id: string,
    _name: string,
    _foundationId: string,
    _nonprofitId: string,
    _submissionId: string,
    _createdBy: string,
    _updatedBy: string,
    _document: TipTapTextBlock,
    _additionalInfo: BoardGrantProposalAdditionalInfo,
    _created: string,
    _updated: string,
    _foundation: Foundation,
    _nonprofit: Nonprofit,
    _submission: GrantProposalSubmission,
    _createdByUser: FoundationUser,
    _updatedByUser: FoundationUser,
    _boardBook: BoardBook
  ) {
    this.id = _id;
    this.name = _name;
    this.foundationId = _foundationId;
    this.nonprofitId = _nonprofitId;
    this.submissionId = _submissionId;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.document = _document;
    this.additionalInfo = _additionalInfo;
    this.created = _created;
    this.updated = _updated;
    this.foundation = _foundation;
    this.nonprofit = _nonprofit;
    this.submission = _submission;
    this.createdByUser = _createdByUser;
    this.updatedByUser = _updatedByUser;
    this.boardBook = _boardBook;
  }
}

class BoardGrantProposalAdditionalInfo {
  pdfDocumentDisplay: PDFDocumentDisplay;

  constructor(_pdfDocumentDisplay: PDFDocumentDisplay) {
    this.pdfDocumentDisplay = _pdfDocumentDisplay;
  }
}

class PDFDocumentDisplay {
  displayFields: DocumentItem[];

  constructor(_displayFields: DocumentItem[]) {
    this.displayFields = _displayFields;
  }
}

class BoardProposalSearchResponse {
  proposals: BoardGrantProposal[];
  count: number;

  constructor(_proposals: BoardGrantProposal[], _count: number) {
    this.proposals = _proposals;
    this.count = _count;
  }
}

class BoardProposalSearchQuery {
  page: number;
  pageSize: number;
  nonprofitId: string;

  constructor(_page: number, _pageSize: number, _nonprofitId: string) {
    this.page = _page;
    this.pageSize = _pageSize;
    this.nonprofitId = _nonprofitId;
  }
}

class BoardGeneratorRequest {
  templateId: string;
  submissionIds: string[];
  nonprofitIds: string[];
  boardBookId: string;

  constructor(
    _templateId: string,
    _submissionIds: string[],
    _nonprofitIds: string[],
    _boardBookId: string
  ) {
    this.templateId = _templateId;
    this.submissionIds = _submissionIds;
    this.nonprofitIds = _nonprofitIds;
    this.boardBookId = _boardBookId;
  }
}

class AnalyticsField {
  key: string;
  displayName: string;
  type: "SUBMISSION" | "NONPROFIT" | "FORM" | "TASK";
  submissionInfo: AnalyticsFieldSubmissionInfo;
  formComponentType:
    | "FILE_UPLOAD"
    | "FILE_DOWNLOAD"
    | "SINGLE_RESPONSE"
    | "MULTI_RESPONSE"
    | "DROPDOWN_LIST"
    | "MULTI_DROPDOWN_LIST"
    | "RATING"
    | "TEXT"
    | "SHORT_TEXT"
    | "FOUNDATION_USER"
    | "TABLE"
    | "NUMBER"
    | "DATE"
    | "BUDGET_CATEGORY"
    | "REPORT_TEMPLATE"
    | "YES_NO_CHECKBOX"
    | "ORG_LEGAL_NAME"
    | "ORG_DBA"
    | "ORG_LEGAL_STATUS"
    | "ORG_EIN"
    | "ORG_HQ"
    | "ORG_HQ_ADDRESS_1"
    | "ORG_HQ_ADDRESS_2"
    | "ORG_HQ_CITY"
    | "ORG_HQ_STATE"
    | "ORG_HQ_ZIPCODE"
    | "ORG_HQ_COUNTRY"
    | "ORG_MAILING_ADDR"
    | "ORG_MAILING_ADDRESS_1"
    | "ORG_MAILING_ADDRESS_2"
    | "ORG_MAILING_CITY"
    | "ORG_MAILING_STATE"
    | "ORG_MAILING_ZIPCODE"
    | "ORG_MAILING_COUNTRY"
    | "ORG_PHONE_NUMBER"
    | "ORG_EMAIL"
    | "ORG_WEBSITE"
    | "ORG_FISCAL_SPONSOR"
    | "ORG_HAS_FISCAL_SPONSOR"
    | "ORG_FISCAL_SPONSOR_NAME"
    | "ORG_FISCAL_SPONSOR_EIN"
    | "ORG_FISCAL_SPONSOR_ADDRESS"
    | "ORG_MISSION"
    | "ORG_VISION"
    | "ORG_DEI"
    | "ORG_FOUNDED_YEAR"
    | "ORG_EMP_FULL_TIME"
    | "ORG_EMP_PART_TIME"
    | "ORG_PRIMARY_CONTACT"
    | "ORG_PRIMARY_CONTACT_NAME"
    | "ORG_PRIMARY_CONTACT_EMAIL"
    | "ORG_PROJECT_DIRECTOR"
    | "ORG_PROJECT_DIRECTOR_NAME"
    | "ORG_PROJECT_DIRECTOR_EMAIL"
    | "ORG_EXECUTIVE"
    | "ORG_EXECUTIVE_NAME"
    | "ORG_EXECUTIVE_EMAIL"
    | "ORG_BUDGET"
    | "ORG_BUDGET_REVENUE"
    | "ORG_BUDGET_EXPENDITURES"
    | "ORG_SOCIAL"
    | "ORG_SOCIAL_FACEBOOK"
    | "ORG_SOCIAL_INSTAGRAM"
    | "ORG_SOCIAL_TWITTER"
    | "ORG_SOCIAL_LINKEDIN"
    | "ORG_SOCIAL_GUIDESTAR"
    | "GRANT_AMOUNT_REQ"
    | "GRANT_TYPE"
    | "GRANT_PROJECT_TITLE"
    | "GRANT_PROJECT_BUDGET"
    | "GRANT_CO_FUNDING"
    | "GRANT_PERIOD"
    | "GRANT_PERIOD_START"
    | "GRANT_PERIOD_END"
    | "GRANT_PROP_TITLE"
    | "GRANT_RELEVANCY"
    | "GRANT_AREA"
    | "GRANT_AREA_CITY"
    | "GRANT_AREA_STATE"
    | "GRANT_AREA_COUNTRY"
    | "GRANT_POP_SERVED"
    | "PAGE_DIVIDER"
    | "TEXT_DESCRIPTION"
    | "FORMATTED_TEXT"
    | "CURRENCY"
    | "EXTERNAL_REFERENCES";

  constructor(
    _key: string,
    _displayName: string,
    _type: "SUBMISSION" | "NONPROFIT" | "FORM" | "TASK",
    _submissionInfo: AnalyticsFieldSubmissionInfo,
    _formComponentType:
      | "FILE_UPLOAD"
      | "FILE_DOWNLOAD"
      | "SINGLE_RESPONSE"
      | "MULTI_RESPONSE"
      | "DROPDOWN_LIST"
      | "MULTI_DROPDOWN_LIST"
      | "RATING"
      | "TEXT"
      | "SHORT_TEXT"
      | "FOUNDATION_USER"
      | "TABLE"
      | "NUMBER"
      | "DATE"
      | "BUDGET_CATEGORY"
      | "REPORT_TEMPLATE"
      | "YES_NO_CHECKBOX"
      | "ORG_LEGAL_NAME"
      | "ORG_DBA"
      | "ORG_LEGAL_STATUS"
      | "ORG_EIN"
      | "ORG_HQ"
      | "ORG_HQ_ADDRESS_1"
      | "ORG_HQ_ADDRESS_2"
      | "ORG_HQ_CITY"
      | "ORG_HQ_STATE"
      | "ORG_HQ_ZIPCODE"
      | "ORG_HQ_COUNTRY"
      | "ORG_MAILING_ADDR"
      | "ORG_MAILING_ADDRESS_1"
      | "ORG_MAILING_ADDRESS_2"
      | "ORG_MAILING_CITY"
      | "ORG_MAILING_STATE"
      | "ORG_MAILING_ZIPCODE"
      | "ORG_MAILING_COUNTRY"
      | "ORG_PHONE_NUMBER"
      | "ORG_EMAIL"
      | "ORG_WEBSITE"
      | "ORG_FISCAL_SPONSOR"
      | "ORG_HAS_FISCAL_SPONSOR"
      | "ORG_FISCAL_SPONSOR_NAME"
      | "ORG_FISCAL_SPONSOR_EIN"
      | "ORG_FISCAL_SPONSOR_ADDRESS"
      | "ORG_MISSION"
      | "ORG_VISION"
      | "ORG_DEI"
      | "ORG_FOUNDED_YEAR"
      | "ORG_EMP_FULL_TIME"
      | "ORG_EMP_PART_TIME"
      | "ORG_PRIMARY_CONTACT"
      | "ORG_PRIMARY_CONTACT_NAME"
      | "ORG_PRIMARY_CONTACT_EMAIL"
      | "ORG_PROJECT_DIRECTOR"
      | "ORG_PROJECT_DIRECTOR_NAME"
      | "ORG_PROJECT_DIRECTOR_EMAIL"
      | "ORG_EXECUTIVE"
      | "ORG_EXECUTIVE_NAME"
      | "ORG_EXECUTIVE_EMAIL"
      | "ORG_BUDGET"
      | "ORG_BUDGET_REVENUE"
      | "ORG_BUDGET_EXPENDITURES"
      | "ORG_SOCIAL"
      | "ORG_SOCIAL_FACEBOOK"
      | "ORG_SOCIAL_INSTAGRAM"
      | "ORG_SOCIAL_TWITTER"
      | "ORG_SOCIAL_LINKEDIN"
      | "ORG_SOCIAL_GUIDESTAR"
      | "GRANT_AMOUNT_REQ"
      | "GRANT_TYPE"
      | "GRANT_PROJECT_TITLE"
      | "GRANT_PROJECT_BUDGET"
      | "GRANT_CO_FUNDING"
      | "GRANT_PERIOD"
      | "GRANT_PERIOD_START"
      | "GRANT_PERIOD_END"
      | "GRANT_PROP_TITLE"
      | "GRANT_RELEVANCY"
      | "GRANT_AREA"
      | "GRANT_AREA_CITY"
      | "GRANT_AREA_STATE"
      | "GRANT_AREA_COUNTRY"
      | "GRANT_POP_SERVED"
      | "PAGE_DIVIDER"
      | "TEXT_DESCRIPTION"
      | "FORMATTED_TEXT"
      | "CURRENCY"
      | "EXTERNAL_REFERENCES"
  ) {
    this.key = _key;
    this.displayName = _displayName;
    this.type = _type;
    this.submissionInfo = _submissionInfo;
    this.formComponentType = _formComponentType;
  }
}

class AnalyticsFieldPaymentResponse {
  fieldValues: AnalyticsFieldValue[];
  total: number;
  payments: NonprofitAmount[];

  constructor(
    _fieldValues: AnalyticsFieldValue[],
    _total: number,
    _payments: NonprofitAmount[]
  ) {
    this.fieldValues = _fieldValues;
    this.total = _total;
    this.payments = _payments;
  }
}

class AnalyticsFieldSubmissionInfo {
  formName: string;
  submissionName: string;

  constructor(_formName: string, _submissionName: string) {
    this.formName = _formName;
    this.submissionName = _submissionName;
  }
}

class AnalyticsFieldValue {
  analyticsField: AnalyticsField;
  response: string;

  constructor(_analyticsField: AnalyticsField, _response: string) {
    this.analyticsField = _analyticsField;
    this.response = _response;
  }
}

class AnalyticsFieldYOYData {
  fieldValues: AnalyticsFieldValue[];
  yearlyData: YearlyData[];

  constructor(_fieldValues: AnalyticsFieldValue[], _yearlyData: YearlyData[]) {
    this.fieldValues = _fieldValues;
    this.yearlyData = _yearlyData;
  }
}

class AnalyticsPaymentYOYData {
  years: FiscalRange[];
  paymentYOYData: AnalyticsFieldYOYData[];

  constructor(_years: FiscalRange[], _paymentYOYData: AnalyticsFieldYOYData[]) {
    this.years = _years;
    this.paymentYOYData = _paymentYOYData;
  }
}

class AnalyticsResponse {
  payments: AnalyticsFieldPaymentResponse[];
  yoyPayments: AnalyticsPaymentYOYData;

  constructor(
    _payments: AnalyticsFieldPaymentResponse[],
    _yoyPayments: AnalyticsPaymentYOYData
  ) {
    this.payments = _payments;
    this.yoyPayments = _yoyPayments;
  }
}

class AnalyticsRequest {
  type: "PAYMENT" | "SUBMISSION";
  fields: AnalyticsField[];

  constructor(_type: "PAYMENT" | "SUBMISSION", _fields: AnalyticsField[]) {
    this.type = _type;
    this.fields = _fields;
  }
}

class DataSearchQuery {
  reportType:
    | "PAYMENTS"
    | "SUBMISSIONS"
    | "DOLLARS_BY_BUDGET_CATEGORY"
    | "DOLLARS_BY_ORGANIZATION_TAGS"
    | "FULL_GRANTS_LIST"
    | "FULL_GRANTEE_CONTACT_LIST"
    | "ALL_DATA"
    | "REPORTS"
    | "REVIEW_TASKS"
    | "EXTERNAL_REVIEWER_TASKS"
    | "CONTACT_LIST"
    | "IRS_990_REPORT"
    | "CANDID_DEMOGRAPHICS"
    | "CRM_PROFILE"
    | "DONOR_MANAGEMENT_REPORT"
    | "DONOR_CONTRIBUTION";
  page: number;
  pageSize: number;

  constructor(
    _reportType:
      | "PAYMENTS"
      | "SUBMISSIONS"
      | "DOLLARS_BY_BUDGET_CATEGORY"
      | "DOLLARS_BY_ORGANIZATION_TAGS"
      | "FULL_GRANTS_LIST"
      | "FULL_GRANTEE_CONTACT_LIST"
      | "ALL_DATA"
      | "REPORTS"
      | "REVIEW_TASKS"
      | "EXTERNAL_REVIEWER_TASKS"
      | "CONTACT_LIST"
      | "IRS_990_REPORT"
      | "CANDID_DEMOGRAPHICS"
      | "CRM_PROFILE"
      | "DONOR_MANAGEMENT_REPORT"
      | "DONOR_CONTRIBUTION",
    _page: number,
    _pageSize: number
  ) {
    this.reportType = _reportType;
    this.page = _page;
    this.pageSize = _pageSize;
  }
}

class DocumentTemplate {
  id: string;
  name: string;
  type: "SYSTEM" | "USER";
  documentType: "BOARD_TEMPLATE" | "AGREEMENT_TEMPLATE";
  foundationId: string;
  createdBy: string;
  updatedBy: string;
  document: TipTapTextBlock;
  additionalInfo: DocumentTemplateAdditionalInfo;
  created: string;
  updated: string;
  createdByUser: FoundationUser;
  updatedByUser: FoundationUser;

  constructor(
    _id: string,
    _name: string,
    _type: "SYSTEM" | "USER",
    _documentType: "BOARD_TEMPLATE" | "AGREEMENT_TEMPLATE",
    _foundationId: string,
    _createdBy: string,
    _updatedBy: string,
    _document: TipTapTextBlock,
    _additionalInfo: DocumentTemplateAdditionalInfo,
    _created: string,
    _updated: string,
    _createdByUser: FoundationUser,
    _updatedByUser: FoundationUser
  ) {
    this.id = _id;
    this.name = _name;
    this.type = _type;
    this.documentType = _documentType;
    this.foundationId = _foundationId;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.document = _document;
    this.additionalInfo = _additionalInfo;
    this.created = _created;
    this.updated = _updated;
    this.createdByUser = _createdByUser;
    this.updatedByUser = _updatedByUser;
  }
}

class DocumentTemplateAdditionalInfo {
  pdfDocumentDisplay: PDFDocumentDisplay;

  constructor(_pdfDocumentDisplay: PDFDocumentDisplay) {
    this.pdfDocumentDisplay = _pdfDocumentDisplay;
  }
}

type DocusignAdditionalInfo = any;

class DocusignEnvelope {
  envelopeId: string;
  accountId: string;
  userId: string;
  foundationId: string;
  status: "CREATED" | "SENT" | "SIGNED" | "DOWNLOADED" | "DECLINED";
  files: string[];
  metadata: Envelope;
  additionalInfo: DocusignAdditionalInfo;
  created: string;
  updated: string;

  constructor(
    _envelopeId: string,
    _accountId: string,
    _userId: string,
    _foundationId: string,
    _status: "CREATED" | "SENT" | "SIGNED" | "DOWNLOADED" | "DECLINED",
    _files: string[],
    _metadata: Envelope,
    _additionalInfo: DocusignAdditionalInfo,
    _created: string,
    _updated: string
  ) {
    this.envelopeId = _envelopeId;
    this.accountId = _accountId;
    this.userId = _userId;
    this.foundationId = _foundationId;
    this.status = _status;
    this.files = _files;
    this.metadata = _metadata;
    this.additionalInfo = _additionalInfo;
    this.created = _created;
    this.updated = _updated;
  }
}

class Envelope {
  status: string;
  documentsUri: string;
  recipientsUri: string;
  attachmentsUri: string;
  envelopeUri: string;
  emailSubject: string;
  emailBlurb: string;
  envelopeId: string;
  signingLocation: string;
  customFieldsUri: string;
  createdDateTime: string;
  lastModifiedDateTime: string;
  deliveredDateTime: string;
  initialSentDateTime: string;
  sentDateTime: string;
  completedDateTime: string;
  voidedDateTime: string;
  voidedReason: string;
  deletedDateTime: string;
  declinedDateTime: string;
  statusChangedDateTime: string;
  documentsCombinedUri: string;
  certificateUri: string;
  templatesUri: string;
  recipients: Recipients;
  sender: Sender;
  rawData: any;

  constructor(
    _status: string,
    _documentsUri: string,
    _recipientsUri: string,
    _attachmentsUri: string,
    _envelopeUri: string,
    _emailSubject: string,
    _emailBlurb: string,
    _envelopeId: string,
    _signingLocation: string,
    _customFieldsUri: string,
    _createdDateTime: string,
    _lastModifiedDateTime: string,
    _deliveredDateTime: string,
    _initialSentDateTime: string,
    _sentDateTime: string,
    _completedDateTime: string,
    _voidedDateTime: string,
    _voidedReason: string,
    _deletedDateTime: string,
    _declinedDateTime: string,
    _statusChangedDateTime: string,
    _documentsCombinedUri: string,
    _certificateUri: string,
    _templatesUri: string,
    _recipients: Recipients,
    _sender: Sender,
    _rawData: any
  ) {
    this.status = _status;
    this.documentsUri = _documentsUri;
    this.recipientsUri = _recipientsUri;
    this.attachmentsUri = _attachmentsUri;
    this.envelopeUri = _envelopeUri;
    this.emailSubject = _emailSubject;
    this.emailBlurb = _emailBlurb;
    this.envelopeId = _envelopeId;
    this.signingLocation = _signingLocation;
    this.customFieldsUri = _customFieldsUri;
    this.createdDateTime = _createdDateTime;
    this.lastModifiedDateTime = _lastModifiedDateTime;
    this.deliveredDateTime = _deliveredDateTime;
    this.initialSentDateTime = _initialSentDateTime;
    this.sentDateTime = _sentDateTime;
    this.completedDateTime = _completedDateTime;
    this.voidedDateTime = _voidedDateTime;
    this.voidedReason = _voidedReason;
    this.deletedDateTime = _deletedDateTime;
    this.declinedDateTime = _declinedDateTime;
    this.statusChangedDateTime = _statusChangedDateTime;
    this.documentsCombinedUri = _documentsCombinedUri;
    this.certificateUri = _certificateUri;
    this.templatesUri = _templatesUri;
    this.recipients = _recipients;
    this.sender = _sender;
    this.rawData = _rawData;
  }
}

class Recipients {
  signers: Signer[];

  constructor(_signers: Signer[]) {
    this.signers = _signers;
  }
}

class Sender {
  userName: string;
  userId: string;
  accountId: string;
  email: string;

  constructor(
    _userName: string,
    _userId: string,
    _accountId: string,
    _email: string
  ) {
    this.userName = _userName;
    this.userId = _userId;
    this.accountId = _accountId;
    this.email = _email;
  }
}

class Signer {
  name: string;
  email: string;
  recipientId: number;
  fullName: string;
  firstName: string;
  lastName: string;
  status: string;
  signedDateTime: string;
  sentDateTime: string;
  deliveredDateTime: string;
  declinedDateTime: string;

  constructor(
    _name: string,
    _email: string,
    _recipientId: number,
    _fullName: string,
    _firstName: string,
    _lastName: string,
    _status: string,
    _signedDateTime: string,
    _sentDateTime: string,
    _deliveredDateTime: string,
    _declinedDateTime: string
  ) {
    this.name = _name;
    this.email = _email;
    this.recipientId = _recipientId;
    this.fullName = _fullName;
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.status = _status;
    this.signedDateTime = _signedDateTime;
    this.sentDateTime = _sentDateTime;
    this.deliveredDateTime = _deliveredDateTime;
    this.declinedDateTime = _declinedDateTime;
  }
}

class DocusignLoginURL {
  url: string;

  constructor(_url: string) {
    this.url = _url;
  }
}

class DocusignLoginRequest {
  redirectURI: string;

  constructor(_redirectURI: string) {
    this.redirectURI = _redirectURI;
  }
}

class AccountInfo {
  accountId: string;
  accountName: string;
  baseURI: string;
  default: boolean;

  constructor(
    _accountId: string,
    _accountName: string,
    _baseURI: string,
    _default: boolean
  ) {
    this.accountId = _accountId;
    this.accountName = _accountName;
    this.baseURI = _baseURI;
    this.default = _default;
  }
}

class DocusignSenderViewResponse {
  url: string;

  constructor(_url: string) {
    this.url = _url;
  }
}

class EnvelopeRecipient {
  email: string;
  name: string;

  constructor(_email: string, _name: string) {
    this.email = _email;
    this.name = _name;
  }
}

class EnvelopeSendRequest {
  taskId: string;
  documentTitle: string;
  recipients: EnvelopeRecipient[];
  returnUri: string;

  constructor(
    _taskId: string,
    _documentTitle: string,
    _recipients: EnvelopeRecipient[],
    _returnUri: string
  ) {
    this.taskId = _taskId;
    this.documentTitle = _documentTitle;
    this.recipients = _recipients;
    this.returnUri = _returnUri;
  }
}

class DonorEntityType {
  name: string;
  fields: any;

  constructor(_name: string, _fields: any) {
    this.name = _name;
    this.fields = _fields;
  }
}

class DonorRelationshipType {
  name: string;
  fields: any;

  constructor(_name: string, _fields: any) {
    this.name = _name;
    this.fields = _fields;
  }
}

class EligibilityConfiguration {
  requireLogin: boolean;
  associatedGrantProposalId: string;
  acceptMessage: TipTapTextBlock;
  rejectMessage: TipTapTextBlock;
  saveToDocuments: boolean;
  acceptEmail: EligibilityEmailTemplate;
  rejectEmail: EligibilityEmailTemplate;

  constructor(
    _requireLogin: boolean,
    _associatedGrantProposalId: string,
    _acceptMessage: TipTapTextBlock,
    _rejectMessage: TipTapTextBlock,
    _saveToDocuments: boolean,
    _acceptEmail: EligibilityEmailTemplate,
    _rejectEmail: EligibilityEmailTemplate
  ) {
    this.requireLogin = _requireLogin;
    this.associatedGrantProposalId = _associatedGrantProposalId;
    this.acceptMessage = _acceptMessage;
    this.rejectMessage = _rejectMessage;
    this.saveToDocuments = _saveToDocuments;
    this.acceptEmail = _acceptEmail;
    this.rejectEmail = _rejectEmail;
  }
}

class EligibilityEmailTemplate {
  subjectText: string;
  messageText: string;
  ccEmail: string;

  constructor(_subjectText: string, _messageText: string, _ccEmail: string) {
    this.subjectText = _subjectText;
    this.messageText = _messageText;
    this.ccEmail = _ccEmail;
  }
}

class EligibilityForm {
  id: string;
  name: string;
  foundationId: string;
  content: FormItem[];
  configuration: EligibilityConfiguration;
  created: string;
  updated: string;
  createdBy: string;
  updatedBy: string;
  createdByUser: FoundationUser;
  updatedByUser: FoundationUser;
  foundation: Foundation;
  grantFormProposal: GrantFormProposal;

  constructor(
    _id: string,
    _name: string,
    _foundationId: string,
    _content: FormItem[],
    _configuration: EligibilityConfiguration,
    _created: string,
    _updated: string,
    _createdBy: string,
    _updatedBy: string,
    _createdByUser: FoundationUser,
    _updatedByUser: FoundationUser,
    _foundation: Foundation,
    _grantFormProposal: GrantFormProposal
  ) {
    this.id = _id;
    this.name = _name;
    this.foundationId = _foundationId;
    this.content = _content;
    this.configuration = _configuration;
    this.created = _created;
    this.updated = _updated;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.createdByUser = _createdByUser;
    this.updatedByUser = _updatedByUser;
    this.foundation = _foundation;
    this.grantFormProposal = _grantFormProposal;
  }
}

class UniversalForm {
  id: string;
  foundationId: string;
  universalFormType: "GRANT_FORM" | "ELIGIBILITY";
  name: string;
  grantFormProposal: GrantFormProposal;
  eligibilityForm: EligibilityForm;
  created: string;
  updated: string;
  createdBy: string;
  updatedBy: string;
  createdByUser: FoundationUser;
  updatedByUser: FoundationUser;

  constructor(
    _id: string,
    _foundationId: string,
    _universalFormType: "GRANT_FORM" | "ELIGIBILITY",
    _name: string,
    _grantFormProposal: GrantFormProposal,
    _eligibilityForm: EligibilityForm,
    _created: string,
    _updated: string,
    _createdBy: string,
    _updatedBy: string,
    _createdByUser: FoundationUser,
    _updatedByUser: FoundationUser
  ) {
    this.id = _id;
    this.foundationId = _foundationId;
    this.universalFormType = _universalFormType;
    this.name = _name;
    this.grantFormProposal = _grantFormProposal;
    this.eligibilityForm = _eligibilityForm;
    this.created = _created;
    this.updated = _updated;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.createdByUser = _createdByUser;
    this.updatedByUser = _updatedByUser;
  }
}

class AssignExternalReviewerRequest {
  externalReviewers: string[];
  submissionIds: string[];
  deadline: string;
  createUniqueTasks: boolean;
  taskTemplateId: string;

  constructor(
    _externalReviewers: string[],
    _submissionIds: string[],
    _deadline: string,
    _createUniqueTasks: boolean,
    _taskTemplateId: string
  ) {
    this.externalReviewers = _externalReviewers;
    this.submissionIds = _submissionIds;
    this.deadline = _deadline;
    this.createUniqueTasks = _createUniqueTasks;
    this.taskTemplateId = _taskTemplateId;
  }
}

class ExternalReviewerDashboard {
  tasks: Task[];
  taskResponses: TaskSubmission[];

  constructor(_tasks: Task[], _taskResponses: TaskSubmission[]) {
    this.tasks = _tasks;
    this.taskResponses = _taskResponses;
  }
}

class TaskSubmission {
  id: string;
  taskId: string;
  createdBy: string;
  updatedBy: string;
  response: FormItemResponseEntity[];
  created: string;
  updated: string;
  taskStatus: "DRAFT" | "OPEN" | "RESOLVED" | "CLOSED";

  constructor(
    _id: string,
    _taskId: string,
    _createdBy: string,
    _updatedBy: string,
    _response: FormItemResponseEntity[],
    _created: string,
    _updated: string,
    _taskStatus: "DRAFT" | "OPEN" | "RESOLVED" | "CLOSED"
  ) {
    this.id = _id;
    this.taskId = _taskId;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.response = _response;
    this.created = _created;
    this.updated = _updated;
    this.taskStatus = _taskStatus;
  }
}

class FileMeta {
  fileId: string;
  fileName: string;
  foundationId: string;
  nonprofitId: string;
  donorEntityId: string;
  fileSourceType:
    | "CRM"
    | "GRANT_APPLICATION"
    | "GRANT_FORM_PROPOSAL"
    | "TASK"
    | "SETTINGS";
  taskId: string;
  fileSourceId: string;
  folderId: string;
  active: boolean;

  constructor(
    _fileId: string,
    _fileName: string,
    _foundationId: string,
    _nonprofitId: string,
    _donorEntityId: string,
    _fileSourceType:
      | "CRM"
      | "GRANT_APPLICATION"
      | "GRANT_FORM_PROPOSAL"
      | "TASK"
      | "SETTINGS",
    _taskId: string,
    _fileSourceId: string,
    _folderId: string,
    _active: boolean
  ) {
    this.fileId = _fileId;
    this.fileName = _fileName;
    this.foundationId = _foundationId;
    this.nonprofitId = _nonprofitId;
    this.donorEntityId = _donorEntityId;
    this.fileSourceType = _fileSourceType;
    this.taskId = _taskId;
    this.fileSourceId = _fileSourceId;
    this.folderId = _folderId;
    this.active = _active;
  }
}

class FileCopyPair {
  sourceFileId: string;
  destFileId: string;

  constructor(_sourceFileId: string, _destFileId: string) {
    this.sourceFileId = _sourceFileId;
    this.destFileId = _destFileId;
  }
}

class Folder {
  id: string;
  displayName: string;
  foundationId: string;
  nonprofitId: string;
  donorEntityId: string;
  active: boolean;
  createdBy: string;
  updatedBy: string;
  created: string;
  updated: string;
  folderId: string;

  constructor(
    _id: string,
    _displayName: string,
    _foundationId: string,
    _nonprofitId: string,
    _donorEntityId: string,
    _active: boolean,
    _createdBy: string,
    _updatedBy: string,
    _created: string,
    _updated: string,
    _folderId: string
  ) {
    this.id = _id;
    this.displayName = _displayName;
    this.foundationId = _foundationId;
    this.nonprofitId = _nonprofitId;
    this.donorEntityId = _donorEntityId;
    this.active = _active;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.created = _created;
    this.updated = _updated;
    this.folderId = _folderId;
  }
}

class AdditionalFilterInfo {
  dataReportType:
    | "PAYMENTS"
    | "SUBMISSIONS"
    | "DOLLARS_BY_BUDGET_CATEGORY"
    | "DOLLARS_BY_ORGANIZATION_TAGS"
    | "FULL_GRANTS_LIST"
    | "FULL_GRANTEE_CONTACT_LIST"
    | "ALL_DATA"
    | "REPORTS"
    | "REVIEW_TASKS"
    | "EXTERNAL_REVIEWER_TASKS"
    | "CONTACT_LIST"
    | "IRS_990_REPORT"
    | "CANDID_DEMOGRAPHICS"
    | "CRM_PROFILE"
    | "DONOR_MANAGEMENT_REPORT"
    | "DONOR_CONTRIBUTION";

  constructor(
    _dataReportType:
      | "PAYMENTS"
      | "SUBMISSIONS"
      | "DOLLARS_BY_BUDGET_CATEGORY"
      | "DOLLARS_BY_ORGANIZATION_TAGS"
      | "FULL_GRANTS_LIST"
      | "FULL_GRANTEE_CONTACT_LIST"
      | "ALL_DATA"
      | "REPORTS"
      | "REVIEW_TASKS"
      | "EXTERNAL_REVIEWER_TASKS"
      | "CONTACT_LIST"
      | "IRS_990_REPORT"
      | "CANDID_DEMOGRAPHICS"
      | "CRM_PROFILE"
      | "DONOR_MANAGEMENT_REPORT"
      | "DONOR_CONTRIBUTION"
  ) {
    this.dataReportType = _dataReportType;
  }
}

class FilterView {
  id: string;
  name: string;
  foundationId: string;
  page: "CRM" | "PROPOSALS" | "DATA";
  pipelineId: string;
  stageId: string;
  settings: FilterViewSettings;
  updatedAt: string;
  updatedById: string;
  createdAt: string;
  createdById: string;
  index: number;

  constructor(
    _id: string,
    _name: string,
    _foundationId: string,
    _page: "CRM" | "PROPOSALS" | "DATA",
    _pipelineId: string,
    _stageId: string,
    _settings: FilterViewSettings,
    _updatedAt: string,
    _updatedById: string,
    _createdAt: string,
    _createdById: string,
    _index: number
  ) {
    this.id = _id;
    this.name = _name;
    this.foundationId = _foundationId;
    this.page = _page;
    this.pipelineId = _pipelineId;
    this.stageId = _stageId;
    this.settings = _settings;
    this.updatedAt = _updatedAt;
    this.updatedById = _updatedById;
    this.createdAt = _createdAt;
    this.createdById = _createdById;
    this.index = _index;
  }
}

class FilterViewCondition {
  key: string;
  filterType: string;
  type:
    | "equals"
    | "notEqual"
    | "contains"
    | "notContains"
    | "blank"
    | "notBlank"
    | "startsWith"
    | "endsWith"
    | "inRange"
    | "lessThan"
    | "lessThanOrEqual"
    | "greaterThan"
    | "greaterThanOrEqual";
  filter: string;
  dateFrom: string;
  dateTo: string;

  constructor(
    _key: string,
    _filterType: string,
    _type:
      | "equals"
      | "notEqual"
      | "contains"
      | "notContains"
      | "blank"
      | "notBlank"
      | "startsWith"
      | "endsWith"
      | "inRange"
      | "lessThan"
      | "lessThanOrEqual"
      | "greaterThan"
      | "greaterThanOrEqual",
    _filter: string,
    _dateFrom: string,
    _dateTo: string
  ) {
    this.key = _key;
    this.filterType = _filterType;
    this.type = _type;
    this.filter = _filter;
    this.dateFrom = _dateFrom;
    this.dateTo = _dateTo;
  }
}

class FilterViewFilter {
  key: string;
  id: string;
  filterType: string;
  operator: string;
  conditions: FilterViewCondition[];

  constructor(
    _key: string,
    _id: string,
    _filterType: string,
    _operator: string,
    _conditions: FilterViewCondition[]
  ) {
    this.key = _key;
    this.id = _id;
    this.filterType = _filterType;
    this.operator = _operator;
    this.conditions = _conditions;
  }
}

class FilterViewRename {
  key: string;
  id: string;
  value: string;

  constructor(_key: string, _id: string, _value: string) {
    this.key = _key;
    this.id = _id;
    this.value = _value;
  }
}

class FilterViewSettings {
  sorting: FilterViewSorting[];
  assignedToMe: boolean;
  visibility: FilterViewVisibility[];
  rename: FilterViewRename[];
  filter: FilterViewFilter[];
  additionalFilterInfo: AdditionalFilterInfo;

  constructor(
    _sorting: FilterViewSorting[],
    _assignedToMe: boolean,
    _visibility: FilterViewVisibility[],
    _rename: FilterViewRename[],
    _filter: FilterViewFilter[],
    _additionalFilterInfo: AdditionalFilterInfo
  ) {
    this.sorting = _sorting;
    this.assignedToMe = _assignedToMe;
    this.visibility = _visibility;
    this.rename = _rename;
    this.filter = _filter;
    this.additionalFilterInfo = _additionalFilterInfo;
  }
}

class FilterViewSorting {
  key: string;
  id: string;
  descending: boolean;

  constructor(_key: string, _id: string, _descending: boolean) {
    this.key = _key;
    this.id = _id;
    this.descending = _descending;
  }
}

class FilterViewVisibility {
  key: string;
  id: string;
  value: boolean;

  constructor(_key: string, _id: string, _value: boolean) {
    this.key = _key;
    this.id = _id;
    this.value = _value;
  }
}

class NonprofitGrantPair {
  nonprofit: Nonprofit;
  nonprofitGrantSubmissions: NonprofitGrantSubmission[];

  constructor(
    _nonprofit: Nonprofit,
    _nonprofitGrantSubmissions: NonprofitGrantSubmission[]
  ) {
    this.nonprofit = _nonprofit;
    this.nonprofitGrantSubmissions = _nonprofitGrantSubmissions;
  }
}

class NonprofitGrantSubmission {
  formProposal: GrantFormProposal;
  submission: GrantProposalSubmission;
  logoFileUrl: string;
  foundationColor: string;

  constructor(
    _formProposal: GrantFormProposal,
    _submission: GrantProposalSubmission,
    _logoFileUrl: string,
    _foundationColor: string
  ) {
    this.formProposal = _formProposal;
    this.submission = _submission;
    this.logoFileUrl = _logoFileUrl;
    this.foundationColor = _foundationColor;
  }
}

class GrantEligibilityResponse {
  responses: FormItemResponseEntity[];

  constructor(_responses: FormItemResponseEntity[]) {
    this.responses = _responses;
  }
}

class EligibilityFormResponses {
  eligibilityFormId: string;
  nonprofitId: string;
  responses: FormItemResponseEntity[];

  constructor(
    _eligibilityFormId: string,
    _nonprofitId: string,
    _responses: FormItemResponseEntity[]
  ) {
    this.eligibilityFormId = _eligibilityFormId;
    this.nonprofitId = _nonprofitId;
    this.responses = _responses;
  }
}

class FoundationPaymentField {
  name: string;
  key: string;
  visibleInTable: boolean;
  type:
    | "SYSTEM"
    | "TEXT"
    | "NUMBER"
    | "CURRENCY"
    | "USER"
    | "DATE"
    | "BOOLEAN"
    | "TAGS"
    | "MULTI";

  constructor(
    _name: string,
    _key: string,
    _visibleInTable: boolean,
    _type:
      | "SYSTEM"
      | "TEXT"
      | "NUMBER"
      | "CURRENCY"
      | "USER"
      | "DATE"
      | "BOOLEAN"
      | "TAGS"
      | "MULTI"
  ) {
    this.name = _name;
    this.key = _key;
    this.visibleInTable = _visibleInTable;
    this.type = _type;
  }
}

class PaymentSearchResponse {
  totalCount: number;
  responses: GrantPayment[];

  constructor(_totalCount: number, _responses: GrantPayment[]) {
    this.totalCount = _totalCount;
    this.responses = _responses;
  }
}

class PaymentSearchQuery {
  page: number;
  pageSize: number;
  nonprofitIds: string[];
  statuses: string[];
  grantSubmissionIds: string[];
  descending: boolean;

  constructor(
    _page: number,
    _pageSize: number,
    _nonprofitIds: string[],
    _statuses: string[],
    _grantSubmissionIds: string[],
    _descending: boolean
  ) {
    this.page = _page;
    this.pageSize = _pageSize;
    this.nonprofitIds = _nonprofitIds;
    this.statuses = _statuses;
    this.grantSubmissionIds = _grantSubmissionIds;
    this.descending = _descending;
  }
}

class BankInfoDownloadRequest {
  nonprofitIds: string[];

  constructor(_nonprofitIds: string[]) {
    this.nonprofitIds = _nonprofitIds;
  }
}

class CRMSearchResponse {
  totalCount: number;
  responses: FoundationNonprofitMetadata[];
  options: any;

  constructor(
    _totalCount: number,
    _responses: FoundationNonprofitMetadata[],
    _options: any
  ) {
    this.totalCount = _totalCount;
    this.responses = _responses;
    this.options = _options;
  }
}

class ContactsResponse {
  crmFields: FoundationCRMField[];
  searchResponse: CRMSearchResponse;

  constructor(
    _crmFields: FoundationCRMField[],
    _searchResponse: CRMSearchResponse
  ) {
    this.crmFields = _crmFields;
    this.searchResponse = _searchResponse;
  }
}

class CRMSearchQuery {
  page: number;
  pageSize: number;
  orgName: string;
  assignedToMe: boolean;
  nonprofitIds: string[];
  sortKey: string;
  asc: boolean;
  sortOptions: SortOption[];
  filterOptions: FilterOption[];

  constructor(
    _page: number,
    _pageSize: number,
    _orgName: string,
    _assignedToMe: boolean,
    _nonprofitIds: string[],
    _sortKey: string,
    _asc: boolean,
    _sortOptions: SortOption[],
    _filterOptions: FilterOption[]
  ) {
    this.page = _page;
    this.pageSize = _pageSize;
    this.orgName = _orgName;
    this.assignedToMe = _assignedToMe;
    this.nonprofitIds = _nonprofitIds;
    this.sortKey = _sortKey;
    this.asc = _asc;
    this.sortOptions = _sortOptions;
    this.filterOptions = _filterOptions;
  }
}

class FilterOption {
  field: string;
  filters: string[];

  constructor(_field: string, _filters: string[]) {
    this.field = _field;
    this.filters = _filters;
  }
}

class SortOption {
  field: string;
  sortDirection: "ASC" | "DESC";

  constructor(_field: string, _sortDirection: "ASC" | "DESC") {
    this.field = _field;
    this.sortDirection = _sortDirection;
  }
}

class ContactsRequest {
  fields: FoundationCRMField[];
  searchQuery: CRMSearchQuery;

  constructor(_fields: FoundationCRMField[], _searchQuery: CRMSearchQuery) {
    this.fields = _fields;
    this.searchQuery = _searchQuery;
  }
}

class LandingPage {
  url: string;

  constructor(_url: string) {
    this.url = _url;
  }
}

class GetFoundationNonprofitUsersResponse {
  nonprofit: Nonprofit;
  users: NonprofitUser[];

  constructor(_nonprofit: Nonprofit, _users: NonprofitUser[]) {
    this.nonprofit = _nonprofit;
    this.users = _users;
  }
}

class FoundationProposals {
  results: ProposalStageResult[];
  movableResults: GrantSubmissionSearchResponse;

  constructor(
    _results: ProposalStageResult[],
    _movableResults: GrantSubmissionSearchResponse
  ) {
    this.results = _results;
    this.movableResults = _movableResults;
  }
}

class FilteredProposalCell {
  value: string;
  link: string;
  tooltip: string;

  constructor(_value: string, _link: string, _tooltip: string) {
    this.value = _value;
    this.link = _link;
    this.tooltip = _tooltip;
  }
}

class FilteredProposalColumn {
  header: string;
  type: string;
  tooltip: string;

  constructor(_header: string, _type: string, _tooltip: string) {
    this.header = _header;
    this.type = _type;
    this.tooltip = _tooltip;
  }
}

class FilteredProposalRow {
  id: string;
  nonprofitId: string;
  grantFormProposal: string;
  name: string;
  foundationOwner: string;
  data: FilteredProposalCell[];
  submission: GrantProposalSubmission;

  constructor(
    _id: string,
    _nonprofitId: string,
    _grantFormProposal: string,
    _name: string,
    _foundationOwner: string,
    _data: FilteredProposalCell[],
    _submission: GrantProposalSubmission
  ) {
    this.id = _id;
    this.nonprofitId = _nonprofitId;
    this.grantFormProposal = _grantFormProposal;
    this.name = _name;
    this.foundationOwner = _foundationOwner;
    this.data = _data;
    this.submission = _submission;
  }
}

class GetFilteredProposalsResponse {
  filterId: string;
  columns: FilteredProposalColumn[];
  rows: FilteredProposalRow[];

  constructor(
    _filterId: string,
    _columns: FilteredProposalColumn[],
    _rows: FilteredProposalRow[]
  ) {
    this.filterId = _filterId;
    this.columns = _columns;
    this.rows = _rows;
  }
}

class GetFilteredBulkProposalsResponse {
  responses: GetFilteredProposalsResponse[];
  movableResults: GrantSubmissionSearchResponse;

  constructor(
    _responses: GetFilteredProposalsResponse[],
    _movableResults: GrantSubmissionSearchResponse
  ) {
    this.responses = _responses;
    this.movableResults = _movableResults;
  }
}

class BulkFilterProposalsRequest {
  assignedToMe: boolean;
  pipelineId: string;
  filterIds: string[];

  constructor(
    _assignedToMe: boolean,
    _pipelineId: string,
    _filterIds: string[]
  ) {
    this.assignedToMe = _assignedToMe;
    this.pipelineId = _pipelineId;
    this.filterIds = _filterIds;
  }
}

class CreateTaskReviewerRequest {
  taskTemplateId: string;
  reviewerIds: string[];
  foundationId: string;
  deadline: string;
  submissionId: string;
  createUniqueTasks: boolean;

  constructor(
    _taskTemplateId: string,
    _reviewerIds: string[],
    _foundationId: string,
    _deadline: string,
    _submissionId: string,
    _createUniqueTasks: boolean
  ) {
    this.taskTemplateId = _taskTemplateId;
    this.reviewerIds = _reviewerIds;
    this.foundationId = _foundationId;
    this.deadline = _deadline;
    this.submissionId = _submissionId;
    this.createUniqueTasks = _createUniqueTasks;
  }
}

class PostmarkMessage {
  tag: string;
  messageId: string;
  messageStream: string;
  to: PostmarkRecipient[];
  cc: PostmarkRecipient[];
  bcc: PostmarkRecipient[];
  recipients: string[];
  receivedAt: string;
  from: string;
  subject: string;
  attachments: string[];
  status: string;
  trackOpens: boolean;
  trackLinks: string;
  metadata: any;
  sandboxed: boolean;
  textBody: string;
  htmlBody: string;
  body: string;
  messageEvents: PostmarkMessageEvent[];

  constructor(
    _tag: string,
    _messageId: string,
    _messageStream: string,
    _to: PostmarkRecipient[],
    _cc: PostmarkRecipient[],
    _bcc: PostmarkRecipient[],
    _recipients: string[],
    _receivedAt: string,
    _from: string,
    _subject: string,
    _attachments: string[],
    _status: string,
    _trackOpens: boolean,
    _trackLinks: string,
    _metadata: any,
    _sandboxed: boolean,
    _textBody: string,
    _htmlBody: string,
    _body: string,
    _messageEvents: PostmarkMessageEvent[]
  ) {
    this.tag = _tag;
    this.messageId = _messageId;
    this.messageStream = _messageStream;
    this.to = _to;
    this.cc = _cc;
    this.bcc = _bcc;
    this.recipients = _recipients;
    this.receivedAt = _receivedAt;
    this.from = _from;
    this.subject = _subject;
    this.attachments = _attachments;
    this.status = _status;
    this.trackOpens = _trackOpens;
    this.trackLinks = _trackLinks;
    this.metadata = _metadata;
    this.sandboxed = _sandboxed;
    this.textBody = _textBody;
    this.htmlBody = _htmlBody;
    this.body = _body;
    this.messageEvents = _messageEvents;
  }
}

class PostmarkMessageEvent {
  recipient: string;
  type: string;
  receivedAt: string;
  details: PostmarkMessageEventDetails;

  constructor(
    _recipient: string,
    _type: string,
    _receivedAt: string,
    _details: PostmarkMessageEventDetails
  ) {
    this.recipient = _recipient;
    this.type = _type;
    this.receivedAt = _receivedAt;
    this.details = _details;
  }
}

class PostmarkMessageEventDetails {
  deliveryMessage: string;
  destinationServer: string;
  destinationIp: string;

  constructor(
    _deliveryMessage: string,
    _destinationServer: string,
    _destinationIp: string
  ) {
    this.deliveryMessage = _deliveryMessage;
    this.destinationServer = _destinationServer;
    this.destinationIp = _destinationIp;
  }
}

class PostmarkRecipient {
  email: string;
  name: string;

  constructor(_email: string, _name: string) {
    this.email = _email;
    this.name = _name;
  }
}

class FoundationNonprofitActivity {
  notes: FoundationNotes[];
  completedTasks: Task[];
  submissions: GrantSubmissionStatusChange[];
  threads: NylasThreadGroup[];

  constructor(
    _notes: FoundationNotes[],
    _completedTasks: Task[],
    _submissions: GrantSubmissionStatusChange[],
    _threads: NylasThreadGroup[]
  ) {
    this.notes = _notes;
    this.completedTasks = _completedTasks;
    this.submissions = _submissions;
    this.threads = _threads;
  }
}

class FoundationNotes {
  id: string;
  foundationId: string;
  nonprofitId: string;
  visibility: "INTERNAL" | "EXTERNAL";
  createdBy: string;
  message: string;
  messageType: "PHONE_CALL" | "EMAIL" | "IN_PERSON";
  sourceType: "CRM" | "GRANT_APPLICATION";
  sourceId: string;
  active: boolean;
  created: string;
  createdByUser: FoundationUser;

  constructor(
    _id: string,
    _foundationId: string,
    _nonprofitId: string,
    _visibility: "INTERNAL" | "EXTERNAL",
    _createdBy: string,
    _message: string,
    _messageType: "PHONE_CALL" | "EMAIL" | "IN_PERSON",
    _sourceType: "CRM" | "GRANT_APPLICATION",
    _sourceId: string,
    _active: boolean,
    _created: string,
    _createdByUser: FoundationUser
  ) {
    this.id = _id;
    this.foundationId = _foundationId;
    this.nonprofitId = _nonprofitId;
    this.visibility = _visibility;
    this.createdBy = _createdBy;
    this.message = _message;
    this.messageType = _messageType;
    this.sourceType = _sourceType;
    this.sourceId = _sourceId;
    this.active = _active;
    this.created = _created;
    this.createdByUser = _createdByUser;
  }
}

class GrantSubmissionStatusChange {
  id: string;
  submissionId: string;
  changeType: "STAGE";
  previousData: StatusChangeData;
  newData: StatusChangeData;
  createdBy: string;
  created: string;
  createdByFoundationUser: FoundationUser;
  createdByNonprofitUser: NonprofitUser;
  submission: GrantProposalSubmission;

  constructor(
    _id: string,
    _submissionId: string,
    _changeType: "STAGE",
    _previousData: StatusChangeData,
    _newData: StatusChangeData,
    _createdBy: string,
    _created: string,
    _createdByFoundationUser: FoundationUser,
    _createdByNonprofitUser: NonprofitUser,
    _submission: GrantProposalSubmission
  ) {
    this.id = _id;
    this.submissionId = _submissionId;
    this.changeType = _changeType;
    this.previousData = _previousData;
    this.newData = _newData;
    this.createdBy = _createdBy;
    this.created = _created;
    this.createdByFoundationUser = _createdByFoundationUser;
    this.createdByNonprofitUser = _createdByNonprofitUser;
    this.submission = _submission;
  }
}

class NylasFolder {
  displayName: string;
  id: string;
  name: string;

  constructor(_displayName: string, _id: string, _name: string) {
    this.displayName = _displayName;
    this.id = _id;
    this.name = _name;
  }
}

class NylasLabel {
  displayName: string;
  id: string;
  name: string;
  providerId: string;

  constructor(
    _displayName: string,
    _id: string,
    _name: string,
    _providerId: string
  ) {
    this.displayName = _displayName;
    this.id = _id;
    this.name = _name;
    this.providerId = _providerId;
  }
}

class NylasParticipant {
  name: string;
  email: string;

  constructor(_name: string, _email: string) {
    this.name = _name;
    this.email = _email;
  }
}

class NylasThread {
  accountId: string;
  firstMessageTimestamp: string;
  folders: NylasFolder[];
  hasAttachments: boolean;
  id: string;
  lastMessageReceivedTimestamp: string;
  lastMessageSentTimestamp: string;
  lastMessageTimestamp: string;
  object: string;
  participants: NylasParticipant[];
  snippet: string;
  starred: boolean;
  subject: string;
  unread: boolean;
  version: number;
  labels: NylasLabel[];
  draftIds: string[];
  messageIds: string[];

  constructor(
    _accountId: string,
    _firstMessageTimestamp: string,
    _folders: NylasFolder[],
    _hasAttachments: boolean,
    _id: string,
    _lastMessageReceivedTimestamp: string,
    _lastMessageSentTimestamp: string,
    _lastMessageTimestamp: string,
    _object: string,
    _participants: NylasParticipant[],
    _snippet: string,
    _starred: boolean,
    _subject: string,
    _unread: boolean,
    _version: number,
    _labels: NylasLabel[],
    _draftIds: string[],
    _messageIds: string[]
  ) {
    this.accountId = _accountId;
    this.firstMessageTimestamp = _firstMessageTimestamp;
    this.folders = _folders;
    this.hasAttachments = _hasAttachments;
    this.id = _id;
    this.lastMessageReceivedTimestamp = _lastMessageReceivedTimestamp;
    this.lastMessageSentTimestamp = _lastMessageSentTimestamp;
    this.lastMessageTimestamp = _lastMessageTimestamp;
    this.object = _object;
    this.participants = _participants;
    this.snippet = _snippet;
    this.starred = _starred;
    this.subject = _subject;
    this.unread = _unread;
    this.version = _version;
    this.labels = _labels;
    this.draftIds = _draftIds;
    this.messageIds = _messageIds;
  }
}

class NylasThreadGroup {
  id: string;
  userId: string;
  nonprofitId: string;
  foundationId: string;
  threadData: NylasThread;
  lastMessageTimestamp: string;
  created: string;
  updated: string;

  constructor(
    _id: string,
    _userId: string,
    _nonprofitId: string,
    _foundationId: string,
    _threadData: NylasThread,
    _lastMessageTimestamp: string,
    _created: string,
    _updated: string
  ) {
    this.id = _id;
    this.userId = _userId;
    this.nonprofitId = _nonprofitId;
    this.foundationId = _foundationId;
    this.threadData = _threadData;
    this.lastMessageTimestamp = _lastMessageTimestamp;
    this.created = _created;
    this.updated = _updated;
  }
}

class StatusChangeData {
  stage: string;

  constructor(_stage: string) {
    this.stage = _stage;
  }
}

class FoundationNonprofitPaymentSummary {
  submissionId: string;
  submission: GrantProposalSubmission;
  totalAwarded: number;
  totalPaid: number;
  totalPayments: number;
  totalPaidPayments: number;
  startDate: string;
  nextDate: string;

  constructor(
    _submissionId: string,
    _submission: GrantProposalSubmission,
    _totalAwarded: number,
    _totalPaid: number,
    _totalPayments: number,
    _totalPaidPayments: number,
    _startDate: string,
    _nextDate: string
  ) {
    this.submissionId = _submissionId;
    this.submission = _submission;
    this.totalAwarded = _totalAwarded;
    this.totalPaid = _totalPaid;
    this.totalPayments = _totalPayments;
    this.totalPaidPayments = _totalPaidPayments;
    this.startDate = _startDate;
    this.nextDate = _nextDate;
  }
}

class NonprofitMergeRequest {
  sourceNonprofitId: string;
  destinationNonprofitId: string;

  constructor(_sourceNonprofitId: string, _destinationNonprofitId: string) {
    this.sourceNonprofitId = _sourceNonprofitId;
    this.destinationNonprofitId = _destinationNonprofitId;
  }
}

class PostmarkOutboundSearchResponse {
  totalCount: number;
  messages: PostmarkMessage[];

  constructor(_totalCount: number, _messages: PostmarkMessage[]) {
    this.totalCount = _totalCount;
    this.messages = _messages;
  }
}

class FoundationNonprofitGrantSummary {
  totalGrantsAwarded: number;
  totalDollarsAwarded: number;
  totalDollarsPaid: number;

  constructor(
    _totalGrantsAwarded: number,
    _totalDollarsAwarded: number,
    _totalDollarsPaid: number
  ) {
    this.totalGrantsAwarded = _totalGrantsAwarded;
    this.totalDollarsAwarded = _totalDollarsAwarded;
    this.totalDollarsPaid = _totalDollarsPaid;
  }
}

class NumbersACH {
  accountId: string;
  account: string;
  routing: string;
  wireRouting: string;
  canTransferIn: boolean;
  canTransferOut: boolean;

  constructor(
    _accountId: string,
    _account: string,
    _routing: string,
    _wireRouting: string,
    _canTransferIn: boolean,
    _canTransferOut: boolean
  ) {
    this.accountId = _accountId;
    this.account = _account;
    this.routing = _routing;
    this.wireRouting = _wireRouting;
    this.canTransferIn = _canTransferIn;
    this.canTransferOut = _canTransferOut;
  }
}

class AccountBalance {
  available: number;
  current: number;
  limit: number;
  isoCurrencyCode: string;
  unofficialCurrencyCode: string;
  lastUpdatedDatetime: string;

  constructor(
    _available: number,
    _current: number,
    _limit: number,
    _isoCurrencyCode: string,
    _unofficialCurrencyCode: string,
    _lastUpdatedDatetime: string
  ) {
    this.available = _available;
    this.current = _current;
    this.limit = _limit;
    this.isoCurrencyCode = _isoCurrencyCode;
    this.unofficialCurrencyCode = _unofficialCurrencyCode;
    this.lastUpdatedDatetime = _lastUpdatedDatetime;
  }
}

class AccountBase {
  accountId: string;
  balances: AccountBalance;
  mask: string;
  name: string;
  officialName: string;
  type:
    | "INVESTMENT"
    | "CREDIT"
    | "DEPOSITORY"
    | "LOAN"
    | "BROKERAGE"
    | "OTHER"
    | "ENUM_UNKNOWN";
  subtype:
    | "_401A"
    | "_401K"
    | "_403B"
    | "_457B"
    | "_529"
    | "BROKERAGE"
    | "CASH_ISA"
    | "CRYPTO_EXCHANGE"
    | "EDUCATION_SAVINGS_ACCOUNT"
    | "EBT"
    | "FIXED_ANNUITY"
    | "GIC"
    | "HEALTH_REIMBURSEMENT_ARRANGEMENT"
    | "HSA"
    | "ISA"
    | "IRA"
    | "LIF"
    | "LIFE_INSURANCE"
    | "LIRA"
    | "LRIF"
    | "LRSP"
    | "NON_CUSTODIAL_WALLET"
    | "NON_TAXABLE_BROKERAGE_ACCOUNT"
    | "OTHER"
    | "OTHER_INSURANCE"
    | "OTHER_ANNUITY"
    | "PRIF"
    | "RDSP"
    | "RESP"
    | "RLIF"
    | "RRIF"
    | "PENSION"
    | "PROFIT_SHARING_PLAN"
    | "RETIREMENT"
    | "ROTH"
    | "ROTH_401K"
    | "RRSP"
    | "SEP_IRA"
    | "SIMPLE_IRA"
    | "SIPP"
    | "STOCK_PLAN"
    | "THRIFT_SAVINGS_PLAN"
    | "TFSA"
    | "TRUST"
    | "UGMA"
    | "UTMA"
    | "VARIABLE_ANNUITY"
    | "CREDIT_CARD"
    | "PAYPAL"
    | "CD"
    | "CHECKING"
    | "SAVINGS"
    | "MONEY_MARKET"
    | "PREPAID"
    | "AUTO"
    | "BUSINESS"
    | "COMMERCIAL"
    | "CONSTRUCTION"
    | "CONSUMER"
    | "HOME_EQUITY"
    | "LOAN"
    | "MORTGAGE"
    | "OVERDRAFT"
    | "LINE_OF_CREDIT"
    | "STUDENT"
    | "CASH_MANAGEMENT"
    | "KEOGH"
    | "MUTUAL_FUND"
    | "RECURRING"
    | "REWARDS"
    | "SAFE_DEPOSIT"
    | "SARSEP"
    | "PAYROLL"
    | "NULL"
    | "ENUM_UNKNOWN";
  verificationStatus:
    | "AUTOMATICALLY_VERIFIED"
    | "PENDING_AUTOMATIC_VERIFICATION"
    | "PENDING_MANUAL_VERIFICATION"
    | "MANUALLY_VERIFIED"
    | "VERIFICATION_EXPIRED"
    | "VERIFICATION_FAILED";

  constructor(
    _accountId: string,
    _balances: AccountBalance,
    _mask: string,
    _name: string,
    _officialName: string,
    _type:
      | "INVESTMENT"
      | "CREDIT"
      | "DEPOSITORY"
      | "LOAN"
      | "BROKERAGE"
      | "OTHER"
      | "ENUM_UNKNOWN",
    _subtype:
      | "_401A"
      | "_401K"
      | "_403B"
      | "_457B"
      | "_529"
      | "BROKERAGE"
      | "CASH_ISA"
      | "CRYPTO_EXCHANGE"
      | "EDUCATION_SAVINGS_ACCOUNT"
      | "EBT"
      | "FIXED_ANNUITY"
      | "GIC"
      | "HEALTH_REIMBURSEMENT_ARRANGEMENT"
      | "HSA"
      | "ISA"
      | "IRA"
      | "LIF"
      | "LIFE_INSURANCE"
      | "LIRA"
      | "LRIF"
      | "LRSP"
      | "NON_CUSTODIAL_WALLET"
      | "NON_TAXABLE_BROKERAGE_ACCOUNT"
      | "OTHER"
      | "OTHER_INSURANCE"
      | "OTHER_ANNUITY"
      | "PRIF"
      | "RDSP"
      | "RESP"
      | "RLIF"
      | "RRIF"
      | "PENSION"
      | "PROFIT_SHARING_PLAN"
      | "RETIREMENT"
      | "ROTH"
      | "ROTH_401K"
      | "RRSP"
      | "SEP_IRA"
      | "SIMPLE_IRA"
      | "SIPP"
      | "STOCK_PLAN"
      | "THRIFT_SAVINGS_PLAN"
      | "TFSA"
      | "TRUST"
      | "UGMA"
      | "UTMA"
      | "VARIABLE_ANNUITY"
      | "CREDIT_CARD"
      | "PAYPAL"
      | "CD"
      | "CHECKING"
      | "SAVINGS"
      | "MONEY_MARKET"
      | "PREPAID"
      | "AUTO"
      | "BUSINESS"
      | "COMMERCIAL"
      | "CONSTRUCTION"
      | "CONSUMER"
      | "HOME_EQUITY"
      | "LOAN"
      | "MORTGAGE"
      | "OVERDRAFT"
      | "LINE_OF_CREDIT"
      | "STUDENT"
      | "CASH_MANAGEMENT"
      | "KEOGH"
      | "MUTUAL_FUND"
      | "RECURRING"
      | "REWARDS"
      | "SAFE_DEPOSIT"
      | "SARSEP"
      | "PAYROLL"
      | "NULL"
      | "ENUM_UNKNOWN",
    _verificationStatus:
      | "AUTOMATICALLY_VERIFIED"
      | "PENDING_AUTOMATIC_VERIFICATION"
      | "PENDING_MANUAL_VERIFICATION"
      | "MANUALLY_VERIFIED"
      | "VERIFICATION_EXPIRED"
      | "VERIFICATION_FAILED"
  ) {
    this.accountId = _accountId;
    this.balances = _balances;
    this.mask = _mask;
    this.name = _name;
    this.officialName = _officialName;
    this.type = _type;
    this.subtype = _subtype;
    this.verificationStatus = _verificationStatus;
  }
}

class AuthMetadata {
  supportedMethods: AuthSupportedMethods;

  constructor(_supportedMethods: AuthSupportedMethods) {
    this.supportedMethods = _supportedMethods;
  }
}

class AuthSupportedMethods {
  instantAuth: boolean;
  instantMatch: boolean;
  automatedMicroDeposits: boolean;

  constructor(
    _instantAuth: boolean,
    _instantMatch: boolean,
    _automatedMicroDeposits: boolean
  ) {
    this.instantAuth = _instantAuth;
    this.instantMatch = _instantMatch;
    this.automatedMicroDeposits = _automatedMicroDeposits;
  }
}

class BankAccountDetail {
  bankNumber: NumbersACH;
  bankAccount: AccountBase;
  institution: Institution;

  constructor(
    _bankNumber: NumbersACH,
    _bankAccount: AccountBase,
    _institution: Institution
  ) {
    this.bankNumber = _bankNumber;
    this.bankAccount = _bankAccount;
    this.institution = _institution;
  }
}

class HealthIncident {
  startDate: string;
  endDate: string;
  title: string;
  incidentUpdates: IncidentUpdate[];

  constructor(
    _startDate: string,
    _endDate: string,
    _title: string,
    _incidentUpdates: IncidentUpdate[]
  ) {
    this.startDate = _startDate;
    this.endDate = _endDate;
    this.title = _title;
    this.incidentUpdates = _incidentUpdates;
  }
}

class IncidentUpdate {
  description: string;
  status: "INVESTIGATING" | "IDENTIFIED" | "SCHEDULED" | "RESOLVED" | "UNKNOWN";
  updatedDate: string;

  constructor(
    _description: string,
    _status:
      | "INVESTIGATING"
      | "IDENTIFIED"
      | "SCHEDULED"
      | "RESOLVED"
      | "UNKNOWN",
    _updatedDate: string
  ) {
    this.description = _description;
    this.status = _status;
    this.updatedDate = _updatedDate;
  }
}

class Institution {
  institutionId: string;
  name: string;
  products: string[];
  countryCodes: string[];
  url: string;
  primaryColor: string;
  logo: string;
  routingNumbers: string[];
  oauth: boolean;
  status: InstitutionStatus;
  paymentInitiationMetadata: PaymentInitiationMetadata;
  authMetadata: AuthMetadata;

  constructor(
    _institutionId: string,
    _name: string,
    _products: string[],
    _countryCodes: string[],
    _url: string,
    _primaryColor: string,
    _logo: string,
    _routingNumbers: string[],
    _oauth: boolean,
    _status: InstitutionStatus,
    _paymentInitiationMetadata: PaymentInitiationMetadata,
    _authMetadata: AuthMetadata
  ) {
    this.institutionId = _institutionId;
    this.name = _name;
    this.products = _products;
    this.countryCodes = _countryCodes;
    this.url = _url;
    this.primaryColor = _primaryColor;
    this.logo = _logo;
    this.routingNumbers = _routingNumbers;
    this.oauth = _oauth;
    this.status = _status;
    this.paymentInitiationMetadata = _paymentInitiationMetadata;
    this.authMetadata = _authMetadata;
  }
}

class InstitutionStatus {
  itemLogins: ProductStatus;
  transactionsUpdates: ProductStatus;
  auth: ProductStatus;
  identity: ProductStatus;
  investmentsUpdates: ProductStatus;
  liabilitiesUpdates: ProductStatus;
  liabilities: ProductStatus;
  investments: ProductStatus;
  healthIncidents: HealthIncident[];

  constructor(
    _itemLogins: ProductStatus,
    _transactionsUpdates: ProductStatus,
    _auth: ProductStatus,
    _identity: ProductStatus,
    _investmentsUpdates: ProductStatus,
    _liabilitiesUpdates: ProductStatus,
    _liabilities: ProductStatus,
    _investments: ProductStatus,
    _healthIncidents: HealthIncident[]
  ) {
    this.itemLogins = _itemLogins;
    this.transactionsUpdates = _transactionsUpdates;
    this.auth = _auth;
    this.identity = _identity;
    this.investmentsUpdates = _investmentsUpdates;
    this.liabilitiesUpdates = _liabilitiesUpdates;
    this.liabilities = _liabilities;
    this.investments = _investments;
    this.healthIncidents = _healthIncidents;
  }
}

class PaymentInitiationMetadata {
  supportsInternationalPayments: boolean;
  supportsSepaInstant: boolean;
  maximumPaymentAmount: any;
  supportsRefundDetails: boolean;
  standingOrderMetadata: PaymentInitiationStandingOrderMetadata;

  constructor(
    _supportsInternationalPayments: boolean,
    _supportsSepaInstant: boolean,
    _maximumPaymentAmount: any,
    _supportsRefundDetails: boolean,
    _standingOrderMetadata: PaymentInitiationStandingOrderMetadata
  ) {
    this.supportsInternationalPayments = _supportsInternationalPayments;
    this.supportsSepaInstant = _supportsSepaInstant;
    this.maximumPaymentAmount = _maximumPaymentAmount;
    this.supportsRefundDetails = _supportsRefundDetails;
    this.standingOrderMetadata = _standingOrderMetadata;
  }
}

class PaymentInitiationStandingOrderMetadata {
  supportsStandingOrderEndDate: boolean;
  supportsStandingOrderNegativeExecutionDays: boolean;
  validStandingOrderIntervals: string[];

  constructor(
    _supportsStandingOrderEndDate: boolean,
    _supportsStandingOrderNegativeExecutionDays: boolean,
    _validStandingOrderIntervals: string[]
  ) {
    this.supportsStandingOrderEndDate = _supportsStandingOrderEndDate;
    this.supportsStandingOrderNegativeExecutionDays =
      _supportsStandingOrderNegativeExecutionDays;
    this.validStandingOrderIntervals = _validStandingOrderIntervals;
  }
}

class ProductStatus {
  status: "HEALTHY" | "DEGRADED" | "DOWN";
  lastStatusChange: string;
  breakdown: ProductStatusBreakdown;

  constructor(
    _status: "HEALTHY" | "DEGRADED" | "DOWN",
    _lastStatusChange: string,
    _breakdown: ProductStatusBreakdown
  ) {
    this.status = _status;
    this.lastStatusChange = _lastStatusChange;
    this.breakdown = _breakdown;
  }
}

class ProductStatusBreakdown {
  success: number;
  errorPlaid: number;
  errorInstitution: number;
  refreshInterval: "NORMAL" | "DELAYED" | "STOPPED";

  constructor(
    _success: number,
    _errorPlaid: number,
    _errorInstitution: number,
    _refreshInterval: "NORMAL" | "DELAYED" | "STOPPED"
  ) {
    this.success = _success;
    this.errorPlaid = _errorPlaid;
    this.errorInstitution = _errorInstitution;
    this.refreshInterval = _refreshInterval;
  }
}

class BulkNonprofitUserUpdate {
  users: NonprofitUser[];
  sendEmail: boolean;

  constructor(_users: NonprofitUser[], _sendEmail: boolean) {
    this.users = _users;
    this.sendEmail = _sendEmail;
  }
}

class AccountBasedExpenseLineDetail {
  customerRef: ReferenceType;
  classRef: ReferenceType;
  accountRef: ReferenceType;
  billableStatus: "BILLABLE" | "NOT_BILLABLE" | "HAS_BEEN_BILLED";
  markupInfo: MarkupInfo;
  taxAmount: number;
  taxCodeRef: ReferenceType;
  taxInclusiveAmt: number;
  expenseDetailLineDetailEx: IntuitAnyType;

  constructor(
    _customerRef: ReferenceType,
    _classRef: ReferenceType,
    _accountRef: ReferenceType,
    _billableStatus: "BILLABLE" | "NOT_BILLABLE" | "HAS_BEEN_BILLED",
    _markupInfo: MarkupInfo,
    _taxAmount: number,
    _taxCodeRef: ReferenceType,
    _taxInclusiveAmt: number,
    _expenseDetailLineDetailEx: IntuitAnyType
  ) {
    this.customerRef = _customerRef;
    this.classRef = _classRef;
    this.accountRef = _accountRef;
    this.billableStatus = _billableStatus;
    this.markupInfo = _markupInfo;
    this.taxAmount = _taxAmount;
    this.taxCodeRef = _taxCodeRef;
    this.taxInclusiveAmt = _taxInclusiveAmt;
    this.expenseDetailLineDetailEx = _expenseDetailLineDetailEx;
  }
}

class AttachableRef {
  entityRef: ReferenceType;
  lineInfo: string;
  includeOnSend: boolean;
  customField: CustomField[];
  attachableRefEx: IntuitAnyType;

  constructor(
    _entityRef: ReferenceType,
    _lineInfo: string,
    _includeOnSend: boolean,
    _customField: CustomField[],
    _attachableRefEx: IntuitAnyType
  ) {
    this.entityRef = _entityRef;
    this.lineInfo = _lineInfo;
    this.includeOnSend = _includeOnSend;
    this.customField = _customField;
    this.attachableRefEx = _attachableRefEx;
  }
}

class Bill {
  id: string;
  syncToken: string;
  metaData: ModificationMetaData;
  customField: CustomField[];
  attachableRef: AttachableRef[];
  domain: string;
  status:
    | "DELETED"
    | "VOIDED"
    | "DRAFT"
    | "PENDING"
    | "IN_TRANSIT"
    | "SYNCHRONIZED"
    | "SYNC_ERROR";
  sparse: boolean;
  docNumber: string;
  txnDate: string;
  departmentRef: ReferenceType;
  currencyRef: ReferenceType;
  exchangeRate: number;
  privateNote: string;
  txnStatus: string;
  linkedTxn: LinkedTxn[];
  line: Line[];
  txnTaxDetail: TxnTaxDetail;
  txnSource: string;
  taxFormType: string;
  taxFormNum: string;
  transactionLocationType: string;
  tag: Tag[];
  txnApprovalInfo: TxnApprovalInfo;
  recurDataRef: ReferenceType;
  recurringInfo: RecurringInfo;
  projectRef: ReferenceType;
  vendorRef: ReferenceType;
  totalAmt: number;
  billEmail: EmailAddress;
  replyEmail: EmailAddress;
  memo: string;
  globalTaxCalculation: "TAX_INCLUSIVE" | "TAX_EXCLUDED" | "NOT_APPLICABLE";
  payerRef: ReferenceType;
  salesTermRef: ReferenceType;
  dueDate: string;
  remitToAddr: PhysicalAddress;
  shipAddr: PhysicalAddress;
  vendorAddr: PhysicalAddress;
  balance: number;
  homeBalance: number;
  billEx: IntuitAnyType;
  lessCIS: number;
  includeInAnnualTPAR: boolean;
  apaccountRef: ReferenceType;

  constructor(
    _id: string,
    _syncToken: string,
    _metaData: ModificationMetaData,
    _customField: CustomField[],
    _attachableRef: AttachableRef[],
    _domain: string,
    _status:
      | "DELETED"
      | "VOIDED"
      | "DRAFT"
      | "PENDING"
      | "IN_TRANSIT"
      | "SYNCHRONIZED"
      | "SYNC_ERROR",
    _sparse: boolean,
    _docNumber: string,
    _txnDate: string,
    _departmentRef: ReferenceType,
    _currencyRef: ReferenceType,
    _exchangeRate: number,
    _privateNote: string,
    _txnStatus: string,
    _linkedTxn: LinkedTxn[],
    _line: Line[],
    _txnTaxDetail: TxnTaxDetail,
    _txnSource: string,
    _taxFormType: string,
    _taxFormNum: string,
    _transactionLocationType: string,
    _tag: Tag[],
    _txnApprovalInfo: TxnApprovalInfo,
    _recurDataRef: ReferenceType,
    _recurringInfo: RecurringInfo,
    _projectRef: ReferenceType,
    _vendorRef: ReferenceType,
    _totalAmt: number,
    _billEmail: EmailAddress,
    _replyEmail: EmailAddress,
    _memo: string,
    _globalTaxCalculation: "TAX_INCLUSIVE" | "TAX_EXCLUDED" | "NOT_APPLICABLE",
    _payerRef: ReferenceType,
    _salesTermRef: ReferenceType,
    _dueDate: string,
    _remitToAddr: PhysicalAddress,
    _shipAddr: PhysicalAddress,
    _vendorAddr: PhysicalAddress,
    _balance: number,
    _homeBalance: number,
    _billEx: IntuitAnyType,
    _lessCIS: number,
    _includeInAnnualTPAR: boolean,
    _apaccountRef: ReferenceType
  ) {
    this.id = _id;
    this.syncToken = _syncToken;
    this.metaData = _metaData;
    this.customField = _customField;
    this.attachableRef = _attachableRef;
    this.domain = _domain;
    this.status = _status;
    this.sparse = _sparse;
    this.docNumber = _docNumber;
    this.txnDate = _txnDate;
    this.departmentRef = _departmentRef;
    this.currencyRef = _currencyRef;
    this.exchangeRate = _exchangeRate;
    this.privateNote = _privateNote;
    this.txnStatus = _txnStatus;
    this.linkedTxn = _linkedTxn;
    this.line = _line;
    this.txnTaxDetail = _txnTaxDetail;
    this.txnSource = _txnSource;
    this.taxFormType = _taxFormType;
    this.taxFormNum = _taxFormNum;
    this.transactionLocationType = _transactionLocationType;
    this.tag = _tag;
    this.txnApprovalInfo = _txnApprovalInfo;
    this.recurDataRef = _recurDataRef;
    this.recurringInfo = _recurringInfo;
    this.projectRef = _projectRef;
    this.vendorRef = _vendorRef;
    this.totalAmt = _totalAmt;
    this.billEmail = _billEmail;
    this.replyEmail = _replyEmail;
    this.memo = _memo;
    this.globalTaxCalculation = _globalTaxCalculation;
    this.payerRef = _payerRef;
    this.salesTermRef = _salesTermRef;
    this.dueDate = _dueDate;
    this.remitToAddr = _remitToAddr;
    this.shipAddr = _shipAddr;
    this.vendorAddr = _vendorAddr;
    this.balance = _balance;
    this.homeBalance = _homeBalance;
    this.billEx = _billEx;
    this.lessCIS = _lessCIS;
    this.includeInAnnualTPAR = _includeInAnnualTPAR;
    this.apaccountRef = _apaccountRef;
  }
}

class ContactInfo {
  type:
    | "TELEPHONE_NUMBER"
    | "EMAIL_ADDRESS"
    | "WEB_SITE_ADDRESS"
    | "GENERIC_CONTACT_TYPE";
  telephone: TelephoneNumber;
  email: EmailAddress;
  webSite: WebSiteAddress;
  otherContact: GenericContactType;

  constructor(
    _type:
      | "TELEPHONE_NUMBER"
      | "EMAIL_ADDRESS"
      | "WEB_SITE_ADDRESS"
      | "GENERIC_CONTACT_TYPE",
    _telephone: TelephoneNumber,
    _email: EmailAddress,
    _webSite: WebSiteAddress,
    _otherContact: GenericContactType
  ) {
    this.type = _type;
    this.telephone = _telephone;
    this.email = _email;
    this.webSite = _webSite;
    this.otherContact = _otherContact;
  }
}

class CustomField {
  definitionId: string;
  name: string;
  type: "STRING_TYPE" | "BOOLEAN_TYPE" | "NUMBER_TYPE" | "DATE_TYPE";
  stringValue: string;
  booleanValue: boolean;
  dateValue: string;
  numberValue: number;

  constructor(
    _definitionId: string,
    _name: string,
    _type: "STRING_TYPE" | "BOOLEAN_TYPE" | "NUMBER_TYPE" | "DATE_TYPE",
    _stringValue: string,
    _booleanValue: boolean,
    _dateValue: string,
    _numberValue: number
  ) {
    this.definitionId = _definitionId;
    this.name = _name;
    this.type = _type;
    this.stringValue = _stringValue;
    this.booleanValue = _booleanValue;
    this.dateValue = _dateValue;
    this.numberValue = _numberValue;
  }
}

class DepositLineDetail {
  entity: ReferenceType;
  classRef: ReferenceType;
  accountRef: ReferenceType;
  paymentMethodRef: ReferenceType;
  checkNum: string;
  txnType:
    | "AP_CREDIT_CARD"
    | "AR_REFUND_CREDIT_CARD"
    | "BILL"
    | "BILL_PAYMENT_CHECK"
    | "BUILD_ASSEMBLY"
    | "CARRY_OVER"
    | "CASH_PURCHASE"
    | "CHARGE"
    | "CHECK"
    | "CREDIT_CARD_PAYMENT"
    | "CREDIT_MEMO"
    | "DEPOSIT"
    | "EFP_LIABILITY_CHECK"
    | "EFT_BILL_PAYMENT"
    | "EFT_REFUND"
    | "ESTIMATE"
    | "INVENTORY_ADJUSTMENT"
    | "INVENTORY_TRANSFER"
    | "INVOICE"
    | "ITEM_RECEIPT"
    | "JOURNAL_ENTRY"
    | "LIABILITY_ADJUSTMENT"
    | "PAYCHECK"
    | "PAYROLL_LIABILITY_CHECK"
    | "PURCHASE_ORDER"
    | "PRIOR_PAYMENT"
    | "RECEIVE_PAYMENT"
    | "REFUND_CHECK"
    | "REIMBURSE_CHARGE"
    | "SALES_ORDER"
    | "SALES_RECEIPT"
    | "SALES_TAX_PAYMENT_CHECK"
    | "TRANSFER"
    | "TIME_ACTIVITY"
    | "VENDOR_CREDIT"
    | "YTD_ADJUSTMENT";
  taxCodeRef: ReferenceType;
  taxApplicableOn: "PURCHASE" | "SALES";
  depositLineDetailEx: IntuitAnyType;

  constructor(
    _entity: ReferenceType,
    _classRef: ReferenceType,
    _accountRef: ReferenceType,
    _paymentMethodRef: ReferenceType,
    _checkNum: string,
    _txnType:
      | "AP_CREDIT_CARD"
      | "AR_REFUND_CREDIT_CARD"
      | "BILL"
      | "BILL_PAYMENT_CHECK"
      | "BUILD_ASSEMBLY"
      | "CARRY_OVER"
      | "CASH_PURCHASE"
      | "CHARGE"
      | "CHECK"
      | "CREDIT_CARD_PAYMENT"
      | "CREDIT_MEMO"
      | "DEPOSIT"
      | "EFP_LIABILITY_CHECK"
      | "EFT_BILL_PAYMENT"
      | "EFT_REFUND"
      | "ESTIMATE"
      | "INVENTORY_ADJUSTMENT"
      | "INVENTORY_TRANSFER"
      | "INVOICE"
      | "ITEM_RECEIPT"
      | "JOURNAL_ENTRY"
      | "LIABILITY_ADJUSTMENT"
      | "PAYCHECK"
      | "PAYROLL_LIABILITY_CHECK"
      | "PURCHASE_ORDER"
      | "PRIOR_PAYMENT"
      | "RECEIVE_PAYMENT"
      | "REFUND_CHECK"
      | "REIMBURSE_CHARGE"
      | "SALES_ORDER"
      | "SALES_RECEIPT"
      | "SALES_TAX_PAYMENT_CHECK"
      | "TRANSFER"
      | "TIME_ACTIVITY"
      | "VENDOR_CREDIT"
      | "YTD_ADJUSTMENT",
    _taxCodeRef: ReferenceType,
    _taxApplicableOn: "PURCHASE" | "SALES",
    _depositLineDetailEx: IntuitAnyType
  ) {
    this.entity = _entity;
    this.classRef = _classRef;
    this.accountRef = _accountRef;
    this.paymentMethodRef = _paymentMethodRef;
    this.checkNum = _checkNum;
    this.txnType = _txnType;
    this.taxCodeRef = _taxCodeRef;
    this.taxApplicableOn = _taxApplicableOn;
    this.depositLineDetailEx = _depositLineDetailEx;
  }
}

class DescriptionLineDetail {
  serviceDate: string;
  taxCodeRef: ReferenceType;
  descriptionLineDetailEx: IntuitAnyType;

  constructor(
    _serviceDate: string,
    _taxCodeRef: ReferenceType,
    _descriptionLineDetailEx: IntuitAnyType
  ) {
    this.serviceDate = _serviceDate;
    this.taxCodeRef = _taxCodeRef;
    this.descriptionLineDetailEx = _descriptionLineDetailEx;
  }
}

class DiscountLineDetail {
  discountRef: ReferenceType;
  percentBased: boolean;
  discountPercent: number;
  discountAccountRef: ReferenceType;
  serviceDate: string;
  classRef: ReferenceType;
  taxCodeRef: ReferenceType;
  discountLineDetailEx: IntuitAnyType;

  constructor(
    _discountRef: ReferenceType,
    _percentBased: boolean,
    _discountPercent: number,
    _discountAccountRef: ReferenceType,
    _serviceDate: string,
    _classRef: ReferenceType,
    _taxCodeRef: ReferenceType,
    _discountLineDetailEx: IntuitAnyType
  ) {
    this.discountRef = _discountRef;
    this.percentBased = _percentBased;
    this.discountPercent = _discountPercent;
    this.discountAccountRef = _discountAccountRef;
    this.serviceDate = _serviceDate;
    this.classRef = _classRef;
    this.taxCodeRef = _taxCodeRef;
    this.discountLineDetailEx = _discountLineDetailEx;
  }
}

class DiscountOverride {
  discountRef: ReferenceType;
  percentBased: boolean;
  discountPercent: number;
  discountAccountRef: ReferenceType;

  constructor(
    _discountRef: ReferenceType,
    _percentBased: boolean,
    _discountPercent: number,
    _discountAccountRef: ReferenceType
  ) {
    this.discountRef = _discountRef;
    this.percentBased = _percentBased;
    this.discountPercent = _discountPercent;
    this.discountAccountRef = _discountAccountRef;
  }
}

class EmailAddress {
  id: string;
  address: string;
  tag: string;
  default: boolean;

  constructor(_id: string, _address: string, _tag: string, _default: boolean) {
    this.id = _id;
    this.address = _address;
    this.tag = _tag;
    this.default = _default;
  }
}

class EntityTypeRef {
  type: "CUSTOMER" | "EMPLOYEE" | "JOB" | "OTHER" | "VENDOR";
  entityRef: ReferenceType;

  constructor(
    _type: "CUSTOMER" | "EMPLOYEE" | "JOB" | "OTHER" | "VENDOR",
    _entityRef: ReferenceType
  ) {
    this.type = _type;
    this.entityRef = _entityRef;
  }
}

class GenericContactType {
  id: string;
  name: string;
  value: string;
  type: string;
  tag: string;
  default: boolean;

  constructor(
    _id: string,
    _name: string,
    _value: string,
    _type: string,
    _tag: string,
    _default: boolean
  ) {
    this.id = _id;
    this.name = _name;
    this.value = _value;
    this.type = _type;
    this.tag = _tag;
    this.default = _default;
  }
}

class GroupLineDetail {
  groupItemRef: ReferenceType;
  quantity: number;
  serviceDate: string;
  line: Line[];
  groupLineDetailEx: IntuitAnyType;
  uomref: UOMRef;

  constructor(
    _groupItemRef: ReferenceType,
    _quantity: number,
    _serviceDate: string,
    _line: Line[],
    _groupLineDetailEx: IntuitAnyType,
    _uomref: UOMRef
  ) {
    this.groupItemRef = _groupItemRef;
    this.quantity = _quantity;
    this.serviceDate = _serviceDate;
    this.line = _line;
    this.groupLineDetailEx = _groupLineDetailEx;
    this.uomref = _uomref;
  }
}

class IntuitAnyType {
  any: object[];

  constructor(_any: object[]) {
    this.any = _any;
  }
}

class ItemAdjustmentLineDetail {
  itemRef: ReferenceType;
  salesPrice: number;
  qtyDiff: number;
  newQty: number;
  classRef: ReferenceType;

  constructor(
    _itemRef: ReferenceType,
    _salesPrice: number,
    _qtyDiff: number,
    _newQty: number,
    _classRef: ReferenceType
  ) {
    this.itemRef = _itemRef;
    this.salesPrice = _salesPrice;
    this.qtyDiff = _qtyDiff;
    this.newQty = _newQty;
    this.classRef = _classRef;
  }
}

class ItemBasedExpenseLineDetail {
  itemRef: ReferenceType;
  classRef: ReferenceType;
  unitPrice: number;
  ratePercent: number;
  priceLevelRef: ReferenceType;
  markupInfo: MarkupInfo;
  qty: number;
  itemAccountRef: ReferenceType;
  inventorySiteRef: ReferenceType;
  taxCodeRef: ReferenceType;
  taxClassificationRef: ReferenceType;
  customerRef: ReferenceType;
  billableStatus: "BILLABLE" | "NOT_BILLABLE" | "HAS_BEEN_BILLED";
  taxInclusiveAmt: number;
  itemBasedExpenseLineDetailEx: IntuitAnyType;
  uomref: UOMRef;

  constructor(
    _itemRef: ReferenceType,
    _classRef: ReferenceType,
    _unitPrice: number,
    _ratePercent: number,
    _priceLevelRef: ReferenceType,
    _markupInfo: MarkupInfo,
    _qty: number,
    _itemAccountRef: ReferenceType,
    _inventorySiteRef: ReferenceType,
    _taxCodeRef: ReferenceType,
    _taxClassificationRef: ReferenceType,
    _customerRef: ReferenceType,
    _billableStatus: "BILLABLE" | "NOT_BILLABLE" | "HAS_BEEN_BILLED",
    _taxInclusiveAmt: number,
    _itemBasedExpenseLineDetailEx: IntuitAnyType,
    _uomref: UOMRef
  ) {
    this.itemRef = _itemRef;
    this.classRef = _classRef;
    this.unitPrice = _unitPrice;
    this.ratePercent = _ratePercent;
    this.priceLevelRef = _priceLevelRef;
    this.markupInfo = _markupInfo;
    this.qty = _qty;
    this.itemAccountRef = _itemAccountRef;
    this.inventorySiteRef = _inventorySiteRef;
    this.taxCodeRef = _taxCodeRef;
    this.taxClassificationRef = _taxClassificationRef;
    this.customerRef = _customerRef;
    this.billableStatus = _billableStatus;
    this.taxInclusiveAmt = _taxInclusiveAmt;
    this.itemBasedExpenseLineDetailEx = _itemBasedExpenseLineDetailEx;
    this.uomref = _uomref;
  }
}

class ItemReceiptLineDetail {
  itemReceiptLineDetailEx: IntuitAnyType;

  constructor(_itemReceiptLineDetailEx: IntuitAnyType) {
    this.itemReceiptLineDetailEx = _itemReceiptLineDetailEx;
  }
}

class JournalEntryLineDetail {
  postingType: "CREDIT" | "DEBIT";
  entity: EntityTypeRef;
  accountRef: ReferenceType;
  classRef: ReferenceType;
  departmentRef: ReferenceType;
  taxCodeRef: ReferenceType;
  taxRateRef: ReferenceType;
  taxApplicableOn: "PURCHASE" | "SALES";
  taxAmount: number;
  taxInclusiveAmt: number;
  billableStatus: "BILLABLE" | "NOT_BILLABLE" | "HAS_BEEN_BILLED";
  journalCodeRef: ReferenceType;
  journalEntryLineDetailEx: IntuitAnyType;

  constructor(
    _postingType: "CREDIT" | "DEBIT",
    _entity: EntityTypeRef,
    _accountRef: ReferenceType,
    _classRef: ReferenceType,
    _departmentRef: ReferenceType,
    _taxCodeRef: ReferenceType,
    _taxRateRef: ReferenceType,
    _taxApplicableOn: "PURCHASE" | "SALES",
    _taxAmount: number,
    _taxInclusiveAmt: number,
    _billableStatus: "BILLABLE" | "NOT_BILLABLE" | "HAS_BEEN_BILLED",
    _journalCodeRef: ReferenceType,
    _journalEntryLineDetailEx: IntuitAnyType
  ) {
    this.postingType = _postingType;
    this.entity = _entity;
    this.accountRef = _accountRef;
    this.classRef = _classRef;
    this.departmentRef = _departmentRef;
    this.taxCodeRef = _taxCodeRef;
    this.taxRateRef = _taxRateRef;
    this.taxApplicableOn = _taxApplicableOn;
    this.taxAmount = _taxAmount;
    this.taxInclusiveAmt = _taxInclusiveAmt;
    this.billableStatus = _billableStatus;
    this.journalCodeRef = _journalCodeRef;
    this.journalEntryLineDetailEx = _journalEntryLineDetailEx;
  }
}

class Line {
  id: string;
  lineNum: number;
  description: string;
  amount: number;
  received: number;
  linkedTxn: LinkedTxn[];
  detailType:
    | "PAYMENT_LINE_DETAIL"
    | "DISCOUNT_LINE_DETAIL"
    | "TAX_LINE_DETAIL"
    | "SALES_ITEM_LINE_DETAIL"
    | "ITEM_BASED_EXPENSE_LINE_DETAIL"
    | "ACCOUNT_BASED_EXPENSE_LINE_DETAIL"
    | "DEPOSIT_LINE_DETAIL"
    | "PURCHASE_ORDER_ITEM_LINE_DETAIL"
    | "ITEM_RECEIPT_LINE_DETAIL"
    | "JOURNAL_ENTRY_LINE_DETAIL"
    | "GROUP_LINE_DETAIL"
    | "DESCRIPTION_ONLY"
    | "SUB_TOTAL_LINE_DETAIL"
    | "SALES_ORDER_ITEM_LINE_DETAIL"
    | "TDS_LINE_DETAIL"
    | "REIMBURSE_LINE_DETAIL"
    | "ITEM_ADJUSTMENT_LINE_DETAIL";
  paymentLineDetail: PaymentLineDetail;
  discountLineDetail: DiscountLineDetail;
  taxLineDetail: TaxLineDetail;
  salesItemLineDetail: SalesItemLineDetail;
  descriptionLineDetail: DescriptionLineDetail;
  itemBasedExpenseLineDetail: ItemBasedExpenseLineDetail;
  accountBasedExpenseLineDetail: AccountBasedExpenseLineDetail;
  reimburseLineDetail: ReimburseLineDetail;
  depositLineDetail: DepositLineDetail;
  purchaseOrderItemLineDetail: PurchaseOrderItemLineDetail;
  salesOrderItemLineDetail: SalesOrderItemLineDetail;
  itemReceiptLineDetail: ItemReceiptLineDetail;
  journalEntryLineDetail: JournalEntryLineDetail;
  groupLineDetail: GroupLineDetail;
  subTotalLineDetail: SubTotalLineDetail;
  itemAdjustmentLineDetail: ItemAdjustmentLineDetail;
  customField: CustomField[];
  lineEx: IntuitAnyType;
  projectRef: ReferenceType;
  tdslineDetail: TDSLineDetail;

  constructor(
    _id: string,
    _lineNum: number,
    _description: string,
    _amount: number,
    _received: number,
    _linkedTxn: LinkedTxn[],
    _detailType:
      | "PAYMENT_LINE_DETAIL"
      | "DISCOUNT_LINE_DETAIL"
      | "TAX_LINE_DETAIL"
      | "SALES_ITEM_LINE_DETAIL"
      | "ITEM_BASED_EXPENSE_LINE_DETAIL"
      | "ACCOUNT_BASED_EXPENSE_LINE_DETAIL"
      | "DEPOSIT_LINE_DETAIL"
      | "PURCHASE_ORDER_ITEM_LINE_DETAIL"
      | "ITEM_RECEIPT_LINE_DETAIL"
      | "JOURNAL_ENTRY_LINE_DETAIL"
      | "GROUP_LINE_DETAIL"
      | "DESCRIPTION_ONLY"
      | "SUB_TOTAL_LINE_DETAIL"
      | "SALES_ORDER_ITEM_LINE_DETAIL"
      | "TDS_LINE_DETAIL"
      | "REIMBURSE_LINE_DETAIL"
      | "ITEM_ADJUSTMENT_LINE_DETAIL",
    _paymentLineDetail: PaymentLineDetail,
    _discountLineDetail: DiscountLineDetail,
    _taxLineDetail: TaxLineDetail,
    _salesItemLineDetail: SalesItemLineDetail,
    _descriptionLineDetail: DescriptionLineDetail,
    _itemBasedExpenseLineDetail: ItemBasedExpenseLineDetail,
    _accountBasedExpenseLineDetail: AccountBasedExpenseLineDetail,
    _reimburseLineDetail: ReimburseLineDetail,
    _depositLineDetail: DepositLineDetail,
    _purchaseOrderItemLineDetail: PurchaseOrderItemLineDetail,
    _salesOrderItemLineDetail: SalesOrderItemLineDetail,
    _itemReceiptLineDetail: ItemReceiptLineDetail,
    _journalEntryLineDetail: JournalEntryLineDetail,
    _groupLineDetail: GroupLineDetail,
    _subTotalLineDetail: SubTotalLineDetail,
    _itemAdjustmentLineDetail: ItemAdjustmentLineDetail,
    _customField: CustomField[],
    _lineEx: IntuitAnyType,
    _projectRef: ReferenceType,
    _tdslineDetail: TDSLineDetail
  ) {
    this.id = _id;
    this.lineNum = _lineNum;
    this.description = _description;
    this.amount = _amount;
    this.received = _received;
    this.linkedTxn = _linkedTxn;
    this.detailType = _detailType;
    this.paymentLineDetail = _paymentLineDetail;
    this.discountLineDetail = _discountLineDetail;
    this.taxLineDetail = _taxLineDetail;
    this.salesItemLineDetail = _salesItemLineDetail;
    this.descriptionLineDetail = _descriptionLineDetail;
    this.itemBasedExpenseLineDetail = _itemBasedExpenseLineDetail;
    this.accountBasedExpenseLineDetail = _accountBasedExpenseLineDetail;
    this.reimburseLineDetail = _reimburseLineDetail;
    this.depositLineDetail = _depositLineDetail;
    this.purchaseOrderItemLineDetail = _purchaseOrderItemLineDetail;
    this.salesOrderItemLineDetail = _salesOrderItemLineDetail;
    this.itemReceiptLineDetail = _itemReceiptLineDetail;
    this.journalEntryLineDetail = _journalEntryLineDetail;
    this.groupLineDetail = _groupLineDetail;
    this.subTotalLineDetail = _subTotalLineDetail;
    this.itemAdjustmentLineDetail = _itemAdjustmentLineDetail;
    this.customField = _customField;
    this.lineEx = _lineEx;
    this.projectRef = _projectRef;
    this.tdslineDetail = _tdslineDetail;
  }
}

class LinkedTxn {
  txnId: string;
  txnType: string;
  txnLineId: string;

  constructor(_txnId: string, _txnType: string, _txnLineId: string) {
    this.txnId = _txnId;
    this.txnType = _txnType;
    this.txnLineId = _txnLineId;
  }
}

class MarkupInfo {
  percentBased: boolean;
  value: number;
  percent: number;
  priceLevelRef: ReferenceType;
  markUpIncomeAccountRef: ReferenceType;

  constructor(
    _percentBased: boolean,
    _value: number,
    _percent: number,
    _priceLevelRef: ReferenceType,
    _markUpIncomeAccountRef: ReferenceType
  ) {
    this.percentBased = _percentBased;
    this.value = _value;
    this.percent = _percent;
    this.priceLevelRef = _priceLevelRef;
    this.markUpIncomeAccountRef = _markUpIncomeAccountRef;
  }
}

class ModificationMetaData {
  createdByRef: ReferenceType;
  createTime: string;
  lastModifiedByRef: ReferenceType;
  lastUpdatedTime: string;
  lastChangedInQB: string;
  synchronized: boolean;

  constructor(
    _createdByRef: ReferenceType,
    _createTime: string,
    _lastModifiedByRef: ReferenceType,
    _lastUpdatedTime: string,
    _lastChangedInQB: string,
    _synchronized: boolean
  ) {
    this.createdByRef = _createdByRef;
    this.createTime = _createTime;
    this.lastModifiedByRef = _lastModifiedByRef;
    this.lastUpdatedTime = _lastUpdatedTime;
    this.lastChangedInQB = _lastChangedInQB;
    this.synchronized = _synchronized;
  }
}

class PaymentLineDetail {
  itemRef: ReferenceType;
  serviceDate: string;
  classRef: ReferenceType;
  balance: number;
  homeBalance: number;
  discount: DiscountOverride;
  paymentLineEx: IntuitAnyType;

  constructor(
    _itemRef: ReferenceType,
    _serviceDate: string,
    _classRef: ReferenceType,
    _balance: number,
    _homeBalance: number,
    _discount: DiscountOverride,
    _paymentLineEx: IntuitAnyType
  ) {
    this.itemRef = _itemRef;
    this.serviceDate = _serviceDate;
    this.classRef = _classRef;
    this.balance = _balance;
    this.homeBalance = _homeBalance;
    this.discount = _discount;
    this.paymentLineEx = _paymentLineEx;
  }
}

class PhysicalAddress {
  id: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  line5: string;
  city: string;
  country: string;
  countryCode: string;
  county: string;
  countrySubDivisionCode: string;
  postalCode: string;
  postalCodeSuffix: string;
  lat: string;
  tag: string;
  note: string;
  long: string;

  constructor(
    _id: string,
    _line1: string,
    _line2: string,
    _line3: string,
    _line4: string,
    _line5: string,
    _city: string,
    _country: string,
    _countryCode: string,
    _county: string,
    _countrySubDivisionCode: string,
    _postalCode: string,
    _postalCodeSuffix: string,
    _lat: string,
    _tag: string,
    _note: string,
    _long: string
  ) {
    this.id = _id;
    this.line1 = _line1;
    this.line2 = _line2;
    this.line3 = _line3;
    this.line4 = _line4;
    this.line5 = _line5;
    this.city = _city;
    this.country = _country;
    this.countryCode = _countryCode;
    this.county = _county;
    this.countrySubDivisionCode = _countrySubDivisionCode;
    this.postalCode = _postalCode;
    this.postalCodeSuffix = _postalCodeSuffix;
    this.lat = _lat;
    this.tag = _tag;
    this.note = _note;
    this.long = _long;
  }
}

class PurchaseOrderItemLineDetail {
  itemRef: ReferenceType;
  classRef: ReferenceType;
  unitPrice: number;
  ratePercent: number;
  priceLevelRef: ReferenceType;
  markupInfo: MarkupInfo;
  qty: number;
  itemAccountRef: ReferenceType;
  inventorySiteRef: ReferenceType;
  taxCodeRef: ReferenceType;
  taxClassificationRef: ReferenceType;
  serviceDate: string;
  taxInclusiveAmt: number;
  discountRate: number;
  discountAmt: number;
  deferredRevenue: boolean;
  salesItemLineDetailEx: IntuitAnyType;
  manPartNum: string;
  manuallyClosed: boolean;
  openQty: number;
  purchaseOrderItemLineDetailEx: IntuitAnyType;
  uomref: UOMRef;

  constructor(
    _itemRef: ReferenceType,
    _classRef: ReferenceType,
    _unitPrice: number,
    _ratePercent: number,
    _priceLevelRef: ReferenceType,
    _markupInfo: MarkupInfo,
    _qty: number,
    _itemAccountRef: ReferenceType,
    _inventorySiteRef: ReferenceType,
    _taxCodeRef: ReferenceType,
    _taxClassificationRef: ReferenceType,
    _serviceDate: string,
    _taxInclusiveAmt: number,
    _discountRate: number,
    _discountAmt: number,
    _deferredRevenue: boolean,
    _salesItemLineDetailEx: IntuitAnyType,
    _manPartNum: string,
    _manuallyClosed: boolean,
    _openQty: number,
    _purchaseOrderItemLineDetailEx: IntuitAnyType,
    _uomref: UOMRef
  ) {
    this.itemRef = _itemRef;
    this.classRef = _classRef;
    this.unitPrice = _unitPrice;
    this.ratePercent = _ratePercent;
    this.priceLevelRef = _priceLevelRef;
    this.markupInfo = _markupInfo;
    this.qty = _qty;
    this.itemAccountRef = _itemAccountRef;
    this.inventorySiteRef = _inventorySiteRef;
    this.taxCodeRef = _taxCodeRef;
    this.taxClassificationRef = _taxClassificationRef;
    this.serviceDate = _serviceDate;
    this.taxInclusiveAmt = _taxInclusiveAmt;
    this.discountRate = _discountRate;
    this.discountAmt = _discountAmt;
    this.deferredRevenue = _deferredRevenue;
    this.salesItemLineDetailEx = _salesItemLineDetailEx;
    this.manPartNum = _manPartNum;
    this.manuallyClosed = _manuallyClosed;
    this.openQty = _openQty;
    this.purchaseOrderItemLineDetailEx = _purchaseOrderItemLineDetailEx;
    this.uomref = _uomref;
  }
}

class QBSearchResponse {
  count: number;
  responses: object[];

  constructor(_count: number, _responses: object[]) {
    this.count = _count;
    this.responses = _responses;
  }
}

class QBSearchResponseBill {
  count: number;
  responses: Bill[];

  constructor(_count: number, _responses: Bill[]) {
    this.count = _count;
    this.responses = _responses;
  }
}

class QuickbooksNonprofitDetails {
  vendor: Vendor;
  bills: QBSearchResponseBill;

  constructor(_vendor: Vendor, _bills: QBSearchResponseBill) {
    this.vendor = _vendor;
    this.bills = _bills;
  }
}

class RecurringInfo {
  name: string;
  recurType: string;
  active: boolean;
  scheduleInfo: RecurringScheduleInfo;

  constructor(
    _name: string,
    _recurType: string,
    _active: boolean,
    _scheduleInfo: RecurringScheduleInfo
  ) {
    this.name = _name;
    this.recurType = _recurType;
    this.active = _active;
    this.scheduleInfo = _scheduleInfo;
  }
}

class RecurringScheduleInfo {
  intervalType: string;
  numInterval: number;
  dayOfMonth: number;
  dayOfWeek:
    | "SUNDAY"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY";
  weekOfMonth: number;
  monthOfYear:
    | "JANUARY"
    | "FEBRUARY"
    | "MARCH"
    | "APRIL"
    | "MAY"
    | "JUNE"
    | "JULY"
    | "AUGUST"
    | "SEPTEMBER"
    | "OCTOBER"
    | "NOVEMBER"
    | "DECEMBER";
  remindDays: number;
  daysBefore: number;
  maxOccurrences: number;
  startDate: string;
  endDate: string;
  nextDate: string;
  previousDate: string;

  constructor(
    _intervalType: string,
    _numInterval: number,
    _dayOfMonth: number,
    _dayOfWeek:
      | "SUNDAY"
      | "MONDAY"
      | "TUESDAY"
      | "WEDNESDAY"
      | "THURSDAY"
      | "FRIDAY"
      | "SATURDAY",
    _weekOfMonth: number,
    _monthOfYear:
      | "JANUARY"
      | "FEBRUARY"
      | "MARCH"
      | "APRIL"
      | "MAY"
      | "JUNE"
      | "JULY"
      | "AUGUST"
      | "SEPTEMBER"
      | "OCTOBER"
      | "NOVEMBER"
      | "DECEMBER",
    _remindDays: number,
    _daysBefore: number,
    _maxOccurrences: number,
    _startDate: string,
    _endDate: string,
    _nextDate: string,
    _previousDate: string
  ) {
    this.intervalType = _intervalType;
    this.numInterval = _numInterval;
    this.dayOfMonth = _dayOfMonth;
    this.dayOfWeek = _dayOfWeek;
    this.weekOfMonth = _weekOfMonth;
    this.monthOfYear = _monthOfYear;
    this.remindDays = _remindDays;
    this.daysBefore = _daysBefore;
    this.maxOccurrences = _maxOccurrences;
    this.startDate = _startDate;
    this.endDate = _endDate;
    this.nextDate = _nextDate;
    this.previousDate = _previousDate;
  }
}

class ReferenceType {
  value: string;
  name: string;
  type: string;

  constructor(_value: string, _name: string, _type: string) {
    this.value = _value;
    this.name = _name;
    this.type = _type;
  }
}

class ReimburseLineDetail {
  itemRef: ReferenceType;
  classRef: ReferenceType;
  unitPrice: number;
  ratePercent: number;
  priceLevelRef: ReferenceType;
  markupInfo: MarkupInfo;
  qty: number;
  itemAccountRef: ReferenceType;
  inventorySiteRef: ReferenceType;
  taxCodeRef: ReferenceType;
  taxClassificationRef: ReferenceType;
  uomref: UOMRef;

  constructor(
    _itemRef: ReferenceType,
    _classRef: ReferenceType,
    _unitPrice: number,
    _ratePercent: number,
    _priceLevelRef: ReferenceType,
    _markupInfo: MarkupInfo,
    _qty: number,
    _itemAccountRef: ReferenceType,
    _inventorySiteRef: ReferenceType,
    _taxCodeRef: ReferenceType,
    _taxClassificationRef: ReferenceType,
    _uomref: UOMRef
  ) {
    this.itemRef = _itemRef;
    this.classRef = _classRef;
    this.unitPrice = _unitPrice;
    this.ratePercent = _ratePercent;
    this.priceLevelRef = _priceLevelRef;
    this.markupInfo = _markupInfo;
    this.qty = _qty;
    this.itemAccountRef = _itemAccountRef;
    this.inventorySiteRef = _inventorySiteRef;
    this.taxCodeRef = _taxCodeRef;
    this.taxClassificationRef = _taxClassificationRef;
    this.uomref = _uomref;
  }
}

class SalesItemLineDetail {
  itemRef: ReferenceType;
  classRef: ReferenceType;
  unitPrice: number;
  ratePercent: number;
  priceLevelRef: ReferenceType;
  markupInfo: MarkupInfo;
  qty: number;
  itemAccountRef: ReferenceType;
  inventorySiteRef: ReferenceType;
  taxCodeRef: ReferenceType;
  taxClassificationRef: ReferenceType;
  serviceDate: string;
  taxInclusiveAmt: number;
  discountRate: number;
  discountAmt: number;
  deferredRevenue: boolean;
  salesItemLineDetailEx: IntuitAnyType;
  uomref: UOMRef;

  constructor(
    _itemRef: ReferenceType,
    _classRef: ReferenceType,
    _unitPrice: number,
    _ratePercent: number,
    _priceLevelRef: ReferenceType,
    _markupInfo: MarkupInfo,
    _qty: number,
    _itemAccountRef: ReferenceType,
    _inventorySiteRef: ReferenceType,
    _taxCodeRef: ReferenceType,
    _taxClassificationRef: ReferenceType,
    _serviceDate: string,
    _taxInclusiveAmt: number,
    _discountRate: number,
    _discountAmt: number,
    _deferredRevenue: boolean,
    _salesItemLineDetailEx: IntuitAnyType,
    _uomref: UOMRef
  ) {
    this.itemRef = _itemRef;
    this.classRef = _classRef;
    this.unitPrice = _unitPrice;
    this.ratePercent = _ratePercent;
    this.priceLevelRef = _priceLevelRef;
    this.markupInfo = _markupInfo;
    this.qty = _qty;
    this.itemAccountRef = _itemAccountRef;
    this.inventorySiteRef = _inventorySiteRef;
    this.taxCodeRef = _taxCodeRef;
    this.taxClassificationRef = _taxClassificationRef;
    this.serviceDate = _serviceDate;
    this.taxInclusiveAmt = _taxInclusiveAmt;
    this.discountRate = _discountRate;
    this.discountAmt = _discountAmt;
    this.deferredRevenue = _deferredRevenue;
    this.salesItemLineDetailEx = _salesItemLineDetailEx;
    this.uomref = _uomref;
  }
}

class SalesOrderItemLineDetail {
  itemRef: ReferenceType;
  classRef: ReferenceType;
  unitPrice: number;
  ratePercent: number;
  priceLevelRef: ReferenceType;
  markupInfo: MarkupInfo;
  qty: number;
  itemAccountRef: ReferenceType;
  inventorySiteRef: ReferenceType;
  taxCodeRef: ReferenceType;
  taxClassificationRef: ReferenceType;
  serviceDate: string;
  taxInclusiveAmt: number;
  discountRate: number;
  discountAmt: number;
  deferredRevenue: boolean;
  salesItemLineDetailEx: IntuitAnyType;
  manuallyClosed: boolean;
  uomref: UOMRef;

  constructor(
    _itemRef: ReferenceType,
    _classRef: ReferenceType,
    _unitPrice: number,
    _ratePercent: number,
    _priceLevelRef: ReferenceType,
    _markupInfo: MarkupInfo,
    _qty: number,
    _itemAccountRef: ReferenceType,
    _inventorySiteRef: ReferenceType,
    _taxCodeRef: ReferenceType,
    _taxClassificationRef: ReferenceType,
    _serviceDate: string,
    _taxInclusiveAmt: number,
    _discountRate: number,
    _discountAmt: number,
    _deferredRevenue: boolean,
    _salesItemLineDetailEx: IntuitAnyType,
    _manuallyClosed: boolean,
    _uomref: UOMRef
  ) {
    this.itemRef = _itemRef;
    this.classRef = _classRef;
    this.unitPrice = _unitPrice;
    this.ratePercent = _ratePercent;
    this.priceLevelRef = _priceLevelRef;
    this.markupInfo = _markupInfo;
    this.qty = _qty;
    this.itemAccountRef = _itemAccountRef;
    this.inventorySiteRef = _inventorySiteRef;
    this.taxCodeRef = _taxCodeRef;
    this.taxClassificationRef = _taxClassificationRef;
    this.serviceDate = _serviceDate;
    this.taxInclusiveAmt = _taxInclusiveAmt;
    this.discountRate = _discountRate;
    this.discountAmt = _discountAmt;
    this.deferredRevenue = _deferredRevenue;
    this.salesItemLineDetailEx = _salesItemLineDetailEx;
    this.manuallyClosed = _manuallyClosed;
    this.uomref = _uomref;
  }
}

class SubTotalLineDetail {
  itemRef: ReferenceType;
  serviceDate: string;

  constructor(_itemRef: ReferenceType, _serviceDate: string) {
    this.itemRef = _itemRef;
    this.serviceDate = _serviceDate;
  }
}

class TDSLineDetail {
  tdssectionTypeId: number;
  tdsaccountRef: ReferenceType;
  tdslineDetailEx: IntuitAnyType;

  constructor(
    _tdssectionTypeId: number,
    _tdsaccountRef: ReferenceType,
    _tdslineDetailEx: IntuitAnyType
  ) {
    this.tdssectionTypeId = _tdssectionTypeId;
    this.tdsaccountRef = _tdsaccountRef;
    this.tdslineDetailEx = _tdslineDetailEx;
  }
}

class Tag {
  id: string;
  syncToken: string;
  metaData: ModificationMetaData;
  customField: CustomField[];
  attachableRef: AttachableRef[];
  domain: string;
  status:
    | "DELETED"
    | "VOIDED"
    | "DRAFT"
    | "PENDING"
    | "IN_TRANSIT"
    | "SYNCHRONIZED"
    | "SYNC_ERROR";
  sparse: boolean;
  name: string;

  constructor(
    _id: string,
    _syncToken: string,
    _metaData: ModificationMetaData,
    _customField: CustomField[],
    _attachableRef: AttachableRef[],
    _domain: string,
    _status:
      | "DELETED"
      | "VOIDED"
      | "DRAFT"
      | "PENDING"
      | "IN_TRANSIT"
      | "SYNCHRONIZED"
      | "SYNC_ERROR",
    _sparse: boolean,
    _name: string
  ) {
    this.id = _id;
    this.syncToken = _syncToken;
    this.metaData = _metaData;
    this.customField = _customField;
    this.attachableRef = _attachableRef;
    this.domain = _domain;
    this.status = _status;
    this.sparse = _sparse;
    this.name = _name;
  }
}

class TaxLineDetail {
  taxRateRef: ReferenceType;
  percentBased: boolean;
  taxPercent: number;
  netAmountTaxable: number;
  taxInclusiveAmount: number;
  overrideDeltaAmount: number;
  serviceDate: string;
  taxLineDetailEx: IntuitAnyType;

  constructor(
    _taxRateRef: ReferenceType,
    _percentBased: boolean,
    _taxPercent: number,
    _netAmountTaxable: number,
    _taxInclusiveAmount: number,
    _overrideDeltaAmount: number,
    _serviceDate: string,
    _taxLineDetailEx: IntuitAnyType
  ) {
    this.taxRateRef = _taxRateRef;
    this.percentBased = _percentBased;
    this.taxPercent = _taxPercent;
    this.netAmountTaxable = _netAmountTaxable;
    this.taxInclusiveAmount = _taxInclusiveAmount;
    this.overrideDeltaAmount = _overrideDeltaAmount;
    this.serviceDate = _serviceDate;
    this.taxLineDetailEx = _taxLineDetailEx;
  }
}

class TelephoneNumber {
  id: string;
  deviceType: string;
  countryCode: string;
  areaCode: string;
  exchangeCode: string;
  extension: string;
  freeFormNumber: string;
  tag: string;
  default: boolean;

  constructor(
    _id: string,
    _deviceType: string,
    _countryCode: string,
    _areaCode: string,
    _exchangeCode: string,
    _extension: string,
    _freeFormNumber: string,
    _tag: string,
    _default: boolean
  ) {
    this.id = _id;
    this.deviceType = _deviceType;
    this.countryCode = _countryCode;
    this.areaCode = _areaCode;
    this.exchangeCode = _exchangeCode;
    this.extension = _extension;
    this.freeFormNumber = _freeFormNumber;
    this.tag = _tag;
    this.default = _default;
  }
}

class TxnApprovalInfo {
  approvalStatus: string;
  approvalStatusDetail: string;
  lastChangedByUser: string;
  lastChangedDate: string;

  constructor(
    _approvalStatus: string,
    _approvalStatusDetail: string,
    _lastChangedByUser: string,
    _lastChangedDate: string
  ) {
    this.approvalStatus = _approvalStatus;
    this.approvalStatusDetail = _approvalStatusDetail;
    this.lastChangedByUser = _lastChangedByUser;
    this.lastChangedDate = _lastChangedDate;
  }
}

class TxnTaxDetail {
  defaultTaxCodeRef: ReferenceType;
  txnTaxCodeRef: ReferenceType;
  totalTax: number;
  taxReviewStatus: "NON_AST_TAX" | "AST_TAX_OVERRIDE";
  taxLine: Line[];
  useAutomatedSalesTax: boolean;

  constructor(
    _defaultTaxCodeRef: ReferenceType,
    _txnTaxCodeRef: ReferenceType,
    _totalTax: number,
    _taxReviewStatus: "NON_AST_TAX" | "AST_TAX_OVERRIDE",
    _taxLine: Line[],
    _useAutomatedSalesTax: boolean
  ) {
    this.defaultTaxCodeRef = _defaultTaxCodeRef;
    this.txnTaxCodeRef = _txnTaxCodeRef;
    this.totalTax = _totalTax;
    this.taxReviewStatus = _taxReviewStatus;
    this.taxLine = _taxLine;
    this.useAutomatedSalesTax = _useAutomatedSalesTax;
  }
}

class UOMRef {
  unit: string;
  uomsetRef: ReferenceType;

  constructor(_unit: string, _uomsetRef: ReferenceType) {
    this.unit = _unit;
    this.uomsetRef = _uomsetRef;
  }
}

class Vendor {
  id: string;
  syncToken: string;
  metaData: ModificationMetaData;
  customField: CustomField[];
  attachableRef: AttachableRef[];
  domain: string;
  status:
    | "DELETED"
    | "VOIDED"
    | "DRAFT"
    | "PENDING"
    | "IN_TRANSIT"
    | "SYNCHRONIZED"
    | "SYNC_ERROR";
  sparse: boolean;
  intuitId: string;
  organization: boolean;
  title: string;
  givenName: string;
  middleName: string;
  familyName: string;
  suffix: string;
  fullyQualifiedName: string;
  companyName: string;
  displayName: string;
  printOnCheckName: string;
  userId: string;
  active: boolean;
  v4IDPseudonym: string;
  primaryPhone: TelephoneNumber;
  alternatePhone: TelephoneNumber;
  mobile: TelephoneNumber;
  fax: TelephoneNumber;
  primaryEmailAddr: EmailAddress;
  webAddr: WebSiteAddress;
  otherContactInfo: ContactInfo[];
  defaultTaxCodeRef: ReferenceType;
  contactName: string;
  altContactName: string;
  notes: string;
  billAddr: PhysicalAddress;
  shipAddr: PhysicalAddress;
  otherAddr: PhysicalAddress[];
  taxCountry: string;
  taxIdentifier: string;
  taxIdEffectiveDate: string;
  businessNumber: string;
  parentRef: ReferenceType;
  vendorTypeRef: ReferenceType;
  termRef: ReferenceType;
  prefillAccountRef: ReferenceType;
  balance: number;
  billRate: number;
  openBalanceDate: string;
  creditLimit: number;
  acctNum: string;
  vendor1099: boolean;
  t4AEligible: boolean;
  t5018Eligible: boolean;
  currencyRef: ReferenceType;
  taxReportingBasis: string;
  vendorEx: IntuitAnyType;
  gstin: string;
  isSubContractor: boolean;
  subcontractorType: string;
  hasTPAR: boolean;
  vendorPaymentBankDetail: VendorBankAccountDetail;
  source: string;
  costRate: number;
  tdsenabled: boolean;
  tdsentityTypeId: number;
  tdssectionTypeId: number;
  tdsoverrideThreshold: boolean;
  apaccountRef: ReferenceType;
  gstregistrationType: string;
  cisrate: string;

  constructor(
    _id: string,
    _syncToken: string,
    _metaData: ModificationMetaData,
    _customField: CustomField[],
    _attachableRef: AttachableRef[],
    _domain: string,
    _status:
      | "DELETED"
      | "VOIDED"
      | "DRAFT"
      | "PENDING"
      | "IN_TRANSIT"
      | "SYNCHRONIZED"
      | "SYNC_ERROR",
    _sparse: boolean,
    _intuitId: string,
    _organization: boolean,
    _title: string,
    _givenName: string,
    _middleName: string,
    _familyName: string,
    _suffix: string,
    _fullyQualifiedName: string,
    _companyName: string,
    _displayName: string,
    _printOnCheckName: string,
    _userId: string,
    _active: boolean,
    _v4IDPseudonym: string,
    _primaryPhone: TelephoneNumber,
    _alternatePhone: TelephoneNumber,
    _mobile: TelephoneNumber,
    _fax: TelephoneNumber,
    _primaryEmailAddr: EmailAddress,
    _webAddr: WebSiteAddress,
    _otherContactInfo: ContactInfo[],
    _defaultTaxCodeRef: ReferenceType,
    _contactName: string,
    _altContactName: string,
    _notes: string,
    _billAddr: PhysicalAddress,
    _shipAddr: PhysicalAddress,
    _otherAddr: PhysicalAddress[],
    _taxCountry: string,
    _taxIdentifier: string,
    _taxIdEffectiveDate: string,
    _businessNumber: string,
    _parentRef: ReferenceType,
    _vendorTypeRef: ReferenceType,
    _termRef: ReferenceType,
    _prefillAccountRef: ReferenceType,
    _balance: number,
    _billRate: number,
    _openBalanceDate: string,
    _creditLimit: number,
    _acctNum: string,
    _vendor1099: boolean,
    _t4AEligible: boolean,
    _t5018Eligible: boolean,
    _currencyRef: ReferenceType,
    _taxReportingBasis: string,
    _vendorEx: IntuitAnyType,
    _gstin: string,
    _isSubContractor: boolean,
    _subcontractorType: string,
    _hasTPAR: boolean,
    _vendorPaymentBankDetail: VendorBankAccountDetail,
    _source: string,
    _costRate: number,
    _tdsenabled: boolean,
    _tdsentityTypeId: number,
    _tdssectionTypeId: number,
    _tdsoverrideThreshold: boolean,
    _apaccountRef: ReferenceType,
    _gstregistrationType: string,
    _cisrate: string
  ) {
    this.id = _id;
    this.syncToken = _syncToken;
    this.metaData = _metaData;
    this.customField = _customField;
    this.attachableRef = _attachableRef;
    this.domain = _domain;
    this.status = _status;
    this.sparse = _sparse;
    this.intuitId = _intuitId;
    this.organization = _organization;
    this.title = _title;
    this.givenName = _givenName;
    this.middleName = _middleName;
    this.familyName = _familyName;
    this.suffix = _suffix;
    this.fullyQualifiedName = _fullyQualifiedName;
    this.companyName = _companyName;
    this.displayName = _displayName;
    this.printOnCheckName = _printOnCheckName;
    this.userId = _userId;
    this.active = _active;
    this.v4IDPseudonym = _v4IDPseudonym;
    this.primaryPhone = _primaryPhone;
    this.alternatePhone = _alternatePhone;
    this.mobile = _mobile;
    this.fax = _fax;
    this.primaryEmailAddr = _primaryEmailAddr;
    this.webAddr = _webAddr;
    this.otherContactInfo = _otherContactInfo;
    this.defaultTaxCodeRef = _defaultTaxCodeRef;
    this.contactName = _contactName;
    this.altContactName = _altContactName;
    this.notes = _notes;
    this.billAddr = _billAddr;
    this.shipAddr = _shipAddr;
    this.otherAddr = _otherAddr;
    this.taxCountry = _taxCountry;
    this.taxIdentifier = _taxIdentifier;
    this.taxIdEffectiveDate = _taxIdEffectiveDate;
    this.businessNumber = _businessNumber;
    this.parentRef = _parentRef;
    this.vendorTypeRef = _vendorTypeRef;
    this.termRef = _termRef;
    this.prefillAccountRef = _prefillAccountRef;
    this.balance = _balance;
    this.billRate = _billRate;
    this.openBalanceDate = _openBalanceDate;
    this.creditLimit = _creditLimit;
    this.acctNum = _acctNum;
    this.vendor1099 = _vendor1099;
    this.t4AEligible = _t4AEligible;
    this.t5018Eligible = _t5018Eligible;
    this.currencyRef = _currencyRef;
    this.taxReportingBasis = _taxReportingBasis;
    this.vendorEx = _vendorEx;
    this.gstin = _gstin;
    this.isSubContractor = _isSubContractor;
    this.subcontractorType = _subcontractorType;
    this.hasTPAR = _hasTPAR;
    this.vendorPaymentBankDetail = _vendorPaymentBankDetail;
    this.source = _source;
    this.costRate = _costRate;
    this.tdsenabled = _tdsenabled;
    this.tdsentityTypeId = _tdsentityTypeId;
    this.tdssectionTypeId = _tdssectionTypeId;
    this.tdsoverrideThreshold = _tdsoverrideThreshold;
    this.apaccountRef = _apaccountRef;
    this.gstregistrationType = _gstregistrationType;
    this.cisrate = _cisrate;
  }
}

class VendorBankAccountDetail {
  bankBranchIdentifier: string;
  bankAccountNumber: string;
  bankAccountName: string;
  statementText: string;

  constructor(
    _bankBranchIdentifier: string,
    _bankAccountNumber: string,
    _bankAccountName: string,
    _statementText: string
  ) {
    this.bankBranchIdentifier = _bankBranchIdentifier;
    this.bankAccountNumber = _bankAccountNumber;
    this.bankAccountName = _bankAccountName;
    this.statementText = _statementText;
  }
}

class WebSiteAddress {
  id: string;
  uri: string;
  tag: string;
  default: boolean;

  constructor(_id: string, _uri: string, _tag: string, _default: boolean) {
    this.id = _id;
    this.uri = _uri;
    this.tag = _tag;
    this.default = _default;
  }
}

class HTMLRequest {
  html: string;
  documentHtmls: string[];

  constructor(_html: string, _documentHtmls: string[]) {
    this.html = _html;
    this.documentHtmls = _documentHtmls;
  }
}

class SubmissionRequest {
  htmlRequest: string;
  submissionId: string;
  boardDocumentId: string;
  formIndex: number;
  merged: boolean;
  moveSubmissionToBottom: boolean;

  constructor(
    _htmlRequest: string,
    _submissionId: string,
    _boardDocumentId: string,
    _formIndex: number,
    _merged: boolean,
    _moveSubmissionToBottom: boolean
  ) {
    this.htmlRequest = _htmlRequest;
    this.submissionId = _submissionId;
    this.boardDocumentId = _boardDocumentId;
    this.formIndex = _formIndex;
    this.merged = _merged;
    this.moveSubmissionToBottom = _moveSubmissionToBottom;
  }
}

class GrantTemplate {
  id: string;
  templateName: string;
  templateType: "SYSTEM" | "USER";
  formatType: "GRANT_FORM" | "ELIGIBILITY";
  foundationId: string;
  createdBy: string;
  updatedBy: string;
  components: FormItem[];
  created: string;
  updated: string;
  createdByUser: FoundationUser;
  updatedByUser: FoundationUser;

  constructor(
    _id: string,
    _templateName: string,
    _templateType: "SYSTEM" | "USER",
    _formatType: "GRANT_FORM" | "ELIGIBILITY",
    _foundationId: string,
    _createdBy: string,
    _updatedBy: string,
    _components: FormItem[],
    _created: string,
    _updated: string,
    _createdByUser: FoundationUser,
    _updatedByUser: FoundationUser
  ) {
    this.id = _id;
    this.templateName = _templateName;
    this.templateType = _templateType;
    this.formatType = _formatType;
    this.foundationId = _foundationId;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.components = _components;
    this.created = _created;
    this.updated = _updated;
    this.createdByUser = _createdByUser;
    this.updatedByUser = _updatedByUser;
  }
}

class BulkActionRequest {
  submissionIds: string[];
  bulkCreatePaymentRequest: BulkCreatePaymentRequest[];
  bulkCreateReportRequest: BulkCreateReportRequest[];
  bulkCreateReminderRequest: BulkCreateReminderRequest[];

  constructor(
    _submissionIds: string[],
    _bulkCreatePaymentRequest: BulkCreatePaymentRequest[],
    _bulkCreateReportRequest: BulkCreateReportRequest[],
    _bulkCreateReminderRequest: BulkCreateReminderRequest[]
  ) {
    this.submissionIds = _submissionIds;
    this.bulkCreatePaymentRequest = _bulkCreatePaymentRequest;
    this.bulkCreateReportRequest = _bulkCreateReportRequest;
    this.bulkCreateReminderRequest = _bulkCreateReminderRequest;
  }
}

class BulkCreatePaymentRequest {
  assigneeId: string;
  amount: number;
  type: "ACH" | "CHECK" | "WIRE" | "STOCK" | "CREDIT_CARD";
  status: "NOT_STARTED" | "CONTINGENT" | "SENT" | "ISSUED" | "CLEARED";
  dueDate: string;
  budgetCategory: string;
  contingencies: string;
  description: string;

  constructor(
    _assigneeId: string,
    _amount: number,
    _type: "ACH" | "CHECK" | "WIRE" | "STOCK" | "CREDIT_CARD",
    _status: "NOT_STARTED" | "CONTINGENT" | "SENT" | "ISSUED" | "CLEARED",
    _dueDate: string,
    _budgetCategory: string,
    _contingencies: string,
    _description: string
  ) {
    this.assigneeId = _assigneeId;
    this.amount = _amount;
    this.type = _type;
    this.status = _status;
    this.dueDate = _dueDate;
    this.budgetCategory = _budgetCategory;
    this.contingencies = _contingencies;
    this.description = _description;
  }
}

class BulkCreateReminderRequest {
  dueDate: string;
  assigneeId: string;
  reminderDescription: string;

  constructor(
    _dueDate: string,
    _assigneeId: string,
    _reminderDescription: string
  ) {
    this.dueDate = _dueDate;
    this.assigneeId = _assigneeId;
    this.reminderDescription = _reminderDescription;
  }
}

class BulkCreateReportRequest {
  reportId: string;
  dueDate: string;
  viewer: string;
  submissionGranteePairs: SubmissionGranteePair[];

  constructor(
    _reportId: string,
    _dueDate: string,
    _viewer: string,
    _submissionGranteePairs: SubmissionGranteePair[]
  ) {
    this.reportId = _reportId;
    this.dueDate = _dueDate;
    this.viewer = _viewer;
    this.submissionGranteePairs = _submissionGranteePairs;
  }
}

class SubmissionGranteePair {
  submissionId: string;
  nonprofitUser: string;

  constructor(_submissionId: string, _nonprofitUser: string) {
    this.submissionId = _submissionId;
    this.nonprofitUser = _nonprofitUser;
  }
}

class GrantProposalSubmissionReminder {
  submissionId: string;
  nonprofitUserId: string;
  customEmailTemplate: CustomEmailTemplate;

  constructor(
    _submissionId: string,
    _nonprofitUserId: string,
    _customEmailTemplate: CustomEmailTemplate
  ) {
    this.submissionId = _submissionId;
    this.nonprofitUserId = _nonprofitUserId;
    this.customEmailTemplate = _customEmailTemplate;
  }
}

class GrantProposalSubmissionDeltaResponse {
  stage: string;
  oldResponse: FormItemResponseEntity[];
  deltaResponse: FormItemResponseEntity[];
  created: string;
  createdByFoundationUser: FoundationUser;
  createdByNonprofitUser: NonprofitUser;

  constructor(
    _stage: string,
    _oldResponse: FormItemResponseEntity[],
    _deltaResponse: FormItemResponseEntity[],
    _created: string,
    _createdByFoundationUser: FoundationUser,
    _createdByNonprofitUser: NonprofitUser
  ) {
    this.stage = _stage;
    this.oldResponse = _oldResponse;
    this.deltaResponse = _deltaResponse;
    this.created = _created;
    this.createdByFoundationUser = _createdByFoundationUser;
    this.createdByNonprofitUser = _createdByNonprofitUser;
  }
}

class GrantSubmissionChange {
  type: "STAGE_CHANGE" | "PROPOSAL_UPDATE";
  statusChange: GrantSubmissionStatusChange;
  response: GrantProposalSubmissionDeltaResponse;

  constructor(
    _type: "STAGE_CHANGE" | "PROPOSAL_UPDATE",
    _statusChange: GrantSubmissionStatusChange,
    _response: GrantProposalSubmissionDeltaResponse
  ) {
    this.type = _type;
    this.statusChange = _statusChange;
    this.response = _response;
  }
}

class SubmissionTasks {
  submissionId: string;
  tasks: Task[];

  constructor(_submissionId: string, _tasks: Task[]) {
    this.submissionId = _submissionId;
    this.tasks = _tasks;
  }
}

class ManualGrantLog {
  foundationId: string;
  formProposalId: string;
  grantProposalSubmission: GrantProposalSubmission;
  grantPayments: GrantPayment[];

  constructor(
    _foundationId: string,
    _formProposalId: string,
    _grantProposalSubmission: GrantProposalSubmission,
    _grantPayments: GrantPayment[]
  ) {
    this.foundationId = _foundationId;
    this.formProposalId = _formProposalId;
    this.grantProposalSubmission = _grantProposalSubmission;
    this.grantPayments = _grantPayments;
  }
}

class SubmissionComment {
  id: string;
  submissionId: string;
  createdBy: string;
  updatedBy: string;
  visibility: "INTERNAL" | "EXTERNAL";
  comment: string;
  created: string;
  updated: string;
  createdByFoundationUser: FoundationUser;
  createdByNonprofitUser: NonprofitUser;
  updatedByFoundationUser: FoundationUser;
  updatedByNonprofitUser: NonprofitUser;
  createdByUser: UserDetails;
  updatedByUser: UserDetails;
  submission: GrantProposalSubmission;

  constructor(
    _id: string,
    _submissionId: string,
    _createdBy: string,
    _updatedBy: string,
    _visibility: "INTERNAL" | "EXTERNAL",
    _comment: string,
    _created: string,
    _updated: string,
    _createdByFoundationUser: FoundationUser,
    _createdByNonprofitUser: NonprofitUser,
    _updatedByFoundationUser: FoundationUser,
    _updatedByNonprofitUser: NonprofitUser,
    _createdByUser: UserDetails,
    _updatedByUser: UserDetails,
    _submission: GrantProposalSubmission
  ) {
    this.id = _id;
    this.submissionId = _submissionId;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.visibility = _visibility;
    this.comment = _comment;
    this.created = _created;
    this.updated = _updated;
    this.createdByFoundationUser = _createdByFoundationUser;
    this.createdByNonprofitUser = _createdByNonprofitUser;
    this.updatedByFoundationUser = _updatedByFoundationUser;
    this.updatedByNonprofitUser = _updatedByNonprofitUser;
    this.createdByUser = _createdByUser;
    this.updatedByUser = _updatedByUser;
    this.submission = _submission;
  }
}

class BulkDownloadRequest {
  submissionIds: string[];
  mergedFiles: boolean;
  formIndex: number;
  includeInternalReviewTasks: boolean;
  includeExternalReviewTasks: boolean;
  inlineImages: boolean;

  constructor(
    _submissionIds: string[],
    _mergedFiles: boolean,
    _formIndex: number,
    _includeInternalReviewTasks: boolean,
    _includeExternalReviewTasks: boolean,
    _inlineImages: boolean
  ) {
    this.submissionIds = _submissionIds;
    this.mergedFiles = _mergedFiles;
    this.formIndex = _formIndex;
    this.includeInternalReviewTasks = _includeInternalReviewTasks;
    this.includeExternalReviewTasks = _includeExternalReviewTasks;
    this.inlineImages = _inlineImages;
  }
}

class GrantSubmissionSearchQuery {
  page: number;
  pageSize: number;
  queryText: string;
  pipelineId: string;
  nonprofitIds: string[];
  formProposalIds: string[];
  tags: string[];
  foundationOwners: string[];
  stages: string[];
  assignedToMe: string;
  assignees: string[];
  watchers: string[];
  movableStages: boolean;
  allPipelines: boolean;

  constructor(
    _page: number,
    _pageSize: number,
    _queryText: string,
    _pipelineId: string,
    _nonprofitIds: string[],
    _formProposalIds: string[],
    _tags: string[],
    _foundationOwners: string[],
    _stages: string[],
    _assignedToMe: string,
    _assignees: string[],
    _watchers: string[],
    _movableStages: boolean,
    _allPipelines: boolean
  ) {
    this.page = _page;
    this.pageSize = _pageSize;
    this.queryText = _queryText;
    this.pipelineId = _pipelineId;
    this.nonprofitIds = _nonprofitIds;
    this.formProposalIds = _formProposalIds;
    this.tags = _tags;
    this.foundationOwners = _foundationOwners;
    this.stages = _stages;
    this.assignedToMe = _assignedToMe;
    this.assignees = _assignees;
    this.watchers = _watchers;
    this.movableStages = _movableStages;
    this.allPipelines = _allPipelines;
  }
}

class ReviewEntity {
  component: FormItem;
  reviewResponses: UserReviewResponse[];

  constructor(_component: FormItem, _reviewResponses: UserReviewResponse[]) {
    this.component = _component;
    this.reviewResponses = _reviewResponses;
  }
}

class ReviewScores {
  reviewEntities: ReviewEntity[];

  constructor(_reviewEntities: ReviewEntity[]) {
    this.reviewEntities = _reviewEntities;
  }
}

class UserReviewResponse {
  userId: string;
  submission: FormComponentSubmission;
  user: FoundationUser;

  constructor(
    _userId: string,
    _submission: FormComponentSubmission,
    _user: FoundationUser
  ) {
    this.userId = _userId;
    this.submission = _submission;
    this.user = _user;
  }
}

class EntitySuggestionResponse {
  source: SuggestionResponseSource;
  answerText: string;
  similarityScore: number;

  constructor(
    _source: SuggestionResponseSource,
    _answerText: string,
    _similarityScore: number
  ) {
    this.source = _source;
    this.answerText = _answerText;
    this.similarityScore = _similarityScore;
  }
}

class ResponseEntitySuggestion {
  formItemResponseEntity: FormItemResponseEntity;
  suggestionResponses: EntitySuggestionResponse[];

  constructor(
    _formItemResponseEntity: FormItemResponseEntity,
    _suggestionResponses: EntitySuggestionResponse[]
  ) {
    this.formItemResponseEntity = _formItemResponseEntity;
    this.suggestionResponses = _suggestionResponses;
  }
}

class SubmissionSuggestionResponses {
  responseEntitySuggestions: ResponseEntitySuggestion[];

  constructor(_responseEntitySuggestions: ResponseEntitySuggestion[]) {
    this.responseEntitySuggestions = _responseEntitySuggestions;
  }
}

class SuggestionResponseSource {
  sourceType: "HISTORICAL_SUBMISSION" | "PDF";
  sourceResponse: FormItemResponseEntity;

  constructor(
    _sourceType: "HISTORICAL_SUBMISSION" | "PDF",
    _sourceResponse: FormItemResponseEntity
  ) {
    this.sourceType = _sourceType;
    this.sourceResponse = _sourceResponse;
  }
}

class QuestionAnswerPair {
  question: string;
  answer: string;

  constructor(_question: string, _answer: string) {
    this.question = _question;
    this.answer = _answer;
  }
}

class SuggestedResponsesRequest {
  includeSubmissions: boolean;
  questionAnswerResponses: QuestionAnswerPair[];

  constructor(
    _includeSubmissions: boolean,
    _questionAnswerResponses: QuestionAnswerPair[]
  ) {
    this.includeSubmissions = _includeSubmissions;
    this.questionAnswerResponses = _questionAnswerResponses;
  }
}

class NonprofitGrantRefereeStatus {
  email: string;
  taskId: string;
  taskStatus: "DRAFT" | "OPEN" | "RESOLVED" | "CLOSED";
  updated: string;

  constructor(
    _email: string,
    _taskId: string,
    _taskStatus: "DRAFT" | "OPEN" | "RESOLVED" | "CLOSED",
    _updated: string
  ) {
    this.email = _email;
    this.taskId = _taskId;
    this.taskStatus = _taskStatus;
    this.updated = _updated;
  }
}

class MailChimpAuthUrl {
  url: string;

  constructor(_url: string) {
    this.url = _url;
  }
}

class MailChimpAddress {
  address2: string;
  state: string;
  zip: string;
  phone: string;
  company: string;
  address1: string;
  city: string;
  country: string;

  constructor(
    _address2: string,
    _state: string,
    _zip: string,
    _phone: string,
    _company: string,
    _address1: string,
    _city: string,
    _country: string
  ) {
    this.address2 = _address2;
    this.state = _state;
    this.zip = _zip;
    this.phone = _phone;
    this.company = _company;
    this.address1 = _address1;
    this.city = _city;
    this.country = _country;
  }
}

class MailChimpCampaign {
  from_name: string;
  from_email: string;
  subject: string;
  language: string;

  constructor(
    _from_name: string,
    _from_email: string,
    _subject: string,
    _language: string
  ) {
    this.from_name = _from_name;
    this.from_email = _from_email;
    this.subject = _subject;
    this.language = _language;
  }
}

class MailChimpList {
  id: string;
  name: string;
  contact: MailChimpAddress;
  permission_reminder: string;
  campaign_defaults: MailChimpCampaign;
  email_type_option: boolean;

  constructor(
    _id: string,
    _name: string,
    _contact: MailChimpAddress,
    _permission_reminder: string,
    _campaign_defaults: MailChimpCampaign,
    _email_type_option: boolean
  ) {
    this.id = _id;
    this.name = _name;
    this.contact = _contact;
    this.permission_reminder = _permission_reminder;
    this.campaign_defaults = _campaign_defaults;
    this.email_type_option = _email_type_option;
  }
}

class NonprofitCreateRequest {
  legalName: string;
  ein: string;
  entityType: "ORGANIZATION" | "INDIVIDUAL";
  hasFiscalSponsor: boolean;
  fiscalSponsor: FiscalSponsor;

  constructor(
    _legalName: string,
    _ein: string,
    _entityType: "ORGANIZATION" | "INDIVIDUAL",
    _hasFiscalSponsor: boolean,
    _fiscalSponsor: FiscalSponsor
  ) {
    this.legalName = _legalName;
    this.ein = _ein;
    this.entityType = _entityType;
    this.hasFiscalSponsor = _hasFiscalSponsor;
    this.fiscalSponsor = _fiscalSponsor;
  }
}

class Notification {
  id: string;
  recipient: NotificationUser;
  notificationType:
    | "NONPROFIT_METADATA_UPDATED"
    | "TASK_COMMENT_MENTIONED"
    | "TASK_CREATED"
    | "TASK_VIEWER_CHANGED"
    | "TASK_COMMENT_ADDED"
    | "TASK_ASSIGNEE_CHANGED"
    | "TASK_STATUS_CHANGED"
    | "TASK_DEADLINE_CHANGED"
    | "TASK_REMINDER"
    | "SUBMISSION_CREATED"
    | "SUBMISSION_STATUS_CHANGED"
    | "SUBMISSION_COMMENT_ADDED"
    | "SUBMISSION_COMMENT_MENTIONED"
    | "SUBMISSION_ASSIGNEE_CHANGED"
    | "SUBMISSION_WATCHER_CHANGED"
    | "SUBMISSION_DEADLINE_CHANGED"
    | "SUBMISSION_PROPOSAL_CHANGED"
    | "SUBMISSION_ALL_TASKS_COMPLETED"
    | "TASK_DEADLINE_UPCOMING"
    | "SUBMISSION_DEADLINE_UPCOMING"
    | "PAYMENT_DEADLINE_UPCOMING"
    | "UPDATE_NONPROFIT_SETTINGS";
  content: NotificationContent;
  created: string;
  viewed: string;

  constructor(
    _id: string,
    _recipient: NotificationUser,
    _notificationType:
      | "NONPROFIT_METADATA_UPDATED"
      | "TASK_COMMENT_MENTIONED"
      | "TASK_CREATED"
      | "TASK_VIEWER_CHANGED"
      | "TASK_COMMENT_ADDED"
      | "TASK_ASSIGNEE_CHANGED"
      | "TASK_STATUS_CHANGED"
      | "TASK_DEADLINE_CHANGED"
      | "TASK_REMINDER"
      | "SUBMISSION_CREATED"
      | "SUBMISSION_STATUS_CHANGED"
      | "SUBMISSION_COMMENT_ADDED"
      | "SUBMISSION_COMMENT_MENTIONED"
      | "SUBMISSION_ASSIGNEE_CHANGED"
      | "SUBMISSION_WATCHER_CHANGED"
      | "SUBMISSION_DEADLINE_CHANGED"
      | "SUBMISSION_PROPOSAL_CHANGED"
      | "SUBMISSION_ALL_TASKS_COMPLETED"
      | "TASK_DEADLINE_UPCOMING"
      | "SUBMISSION_DEADLINE_UPCOMING"
      | "PAYMENT_DEADLINE_UPCOMING"
      | "UPDATE_NONPROFIT_SETTINGS",
    _content: NotificationContent,
    _created: string,
    _viewed: string
  ) {
    this.id = _id;
    this.recipient = _recipient;
    this.notificationType = _notificationType;
    this.content = _content;
    this.created = _created;
    this.viewed = _viewed;
  }
}

class NotificationContent {
  actionUser: string;
  actionOrg: string;
  notificationOrgType: "NONPROFIT" | "FOUNDATION";
  prevStage: string;
  currStage: string;
  prevStatus: "DRAFT" | "OPEN" | "RESOLVED" | "CLOSED";
  currStatus: "DRAFT" | "OPEN" | "RESOLVED" | "CLOSED";
  taskId: string;
  submissionId: string;
  paymentId: string;
  prevMetadata: NonprofitMetadata;
  currMetadata: NonprofitMetadata;
  foundationActionUser: FoundationUser;
  nonprofitActionUser: NonprofitUser;
  foundationActionOrg: Foundation;
  nonprofitActionOrg: Nonprofit;
  task: Task;
  submission: GrantProposalSubmission;

  constructor(
    _actionUser: string,
    _actionOrg: string,
    _notificationOrgType: "NONPROFIT" | "FOUNDATION",
    _prevStage: string,
    _currStage: string,
    _prevStatus: "DRAFT" | "OPEN" | "RESOLVED" | "CLOSED",
    _currStatus: "DRAFT" | "OPEN" | "RESOLVED" | "CLOSED",
    _taskId: string,
    _submissionId: string,
    _paymentId: string,
    _prevMetadata: NonprofitMetadata,
    _currMetadata: NonprofitMetadata,
    _foundationActionUser: FoundationUser,
    _nonprofitActionUser: NonprofitUser,
    _foundationActionOrg: Foundation,
    _nonprofitActionOrg: Nonprofit,
    _task: Task,
    _submission: GrantProposalSubmission
  ) {
    this.actionUser = _actionUser;
    this.actionOrg = _actionOrg;
    this.notificationOrgType = _notificationOrgType;
    this.prevStage = _prevStage;
    this.currStage = _currStage;
    this.prevStatus = _prevStatus;
    this.currStatus = _currStatus;
    this.taskId = _taskId;
    this.submissionId = _submissionId;
    this.paymentId = _paymentId;
    this.prevMetadata = _prevMetadata;
    this.currMetadata = _currMetadata;
    this.foundationActionUser = _foundationActionUser;
    this.nonprofitActionUser = _nonprofitActionUser;
    this.foundationActionOrg = _foundationActionOrg;
    this.nonprofitActionOrg = _nonprofitActionOrg;
    this.task = _task;
    this.submission = _submission;
  }
}

class NotificationResponse {
  totalCount: number;
  unviewedCount: number;
  responses: Notification[];

  constructor(
    _totalCount: number,
    _unviewedCount: number,
    _responses: Notification[]
  ) {
    this.totalCount = _totalCount;
    this.unviewedCount = _unviewedCount;
    this.responses = _responses;
  }
}

class NotificationUser {
  userId: string;
  orgId: string;
  orgType: "NONPROFIT" | "FOUNDATION";
  foundationUser: FoundationUser;
  nonprofitUser: NonprofitUser;

  constructor(
    _userId: string,
    _orgId: string,
    _orgType: "NONPROFIT" | "FOUNDATION",
    _foundationUser: FoundationUser,
    _nonprofitUser: NonprofitUser
  ) {
    this.userId = _userId;
    this.orgId = _orgId;
    this.orgType = _orgType;
    this.foundationUser = _foundationUser;
    this.nonprofitUser = _nonprofitUser;
  }
}

class NotificationQuery {
  page: number;
  pageSize: number;
  allNotifications: boolean;

  constructor(_page: number, _pageSize: number, _allNotifications: boolean) {
    this.page = _page;
    this.pageSize = _pageSize;
    this.allNotifications = _allNotifications;
  }
}

class NylasFile {
  contentType: string;
  fileName: string;
  object: string;
  size: number;
  id: string;
  contentId: string;

  constructor(
    _contentType: string,
    _fileName: string,
    _object: string,
    _size: number,
    _id: string,
    _contentId: string
  ) {
    this.contentType = _contentType;
    this.fileName = _fileName;
    this.object = _object;
    this.size = _size;
    this.id = _id;
    this.contentId = _contentId;
  }
}

class NylasMessage {
  accountId: string;
  bcc: NylasParticipant[];
  body: string;
  cc: NylasParticipant[];
  date: string;
  files: NylasFile[];
  folder: NylasFolder;
  from: NylasParticipant[];
  id: string;
  object: string;
  replyTo: NylasParticipant[];
  snippet: string;
  starred: boolean;
  subject: string;
  threadId: string;
  to: NylasParticipant[];
  unread: boolean;
  labels: NylasLabel[];
  metadata: any;

  constructor(
    _accountId: string,
    _bcc: NylasParticipant[],
    _body: string,
    _cc: NylasParticipant[],
    _date: string,
    _files: NylasFile[],
    _folder: NylasFolder,
    _from: NylasParticipant[],
    _id: string,
    _object: string,
    _replyTo: NylasParticipant[],
    _snippet: string,
    _starred: boolean,
    _subject: string,
    _threadId: string,
    _to: NylasParticipant[],
    _unread: boolean,
    _labels: NylasLabel[],
    _metadata: any
  ) {
    this.accountId = _accountId;
    this.bcc = _bcc;
    this.body = _body;
    this.cc = _cc;
    this.date = _date;
    this.files = _files;
    this.folder = _folder;
    this.from = _from;
    this.id = _id;
    this.object = _object;
    this.replyTo = _replyTo;
    this.snippet = _snippet;
    this.starred = _starred;
    this.subject = _subject;
    this.threadId = _threadId;
    this.to = _to;
    this.unread = _unread;
    this.labels = _labels;
    this.metadata = _metadata;
  }
}

class NylasFileRequest {
  threadId: string;
  messageId: string;
  fileId: string;

  constructor(_threadId: string, _messageId: string, _fileId: string) {
    this.threadId = _threadId;
    this.messageId = _messageId;
    this.fileId = _fileId;
  }
}

class NylasLoginURL {
  url: string;

  constructor(_url: string) {
    this.url = _url;
  }
}

class PlaidLinkTokenResponse {
  linkToken: string;

  constructor(_linkToken: string) {
    this.linkToken = _linkToken;
  }
}

class PlaidTokenExchangeResponse {
  accessToken: string;
  itemId: string;

  constructor(_accessToken: string, _itemId: string) {
    this.accessToken = _accessToken;
    this.itemId = _itemId;
  }
}

class PlaidTokenExchangeRequest {
  publicToken: string;

  constructor(_publicToken: string) {
    this.publicToken = _publicToken;
  }
}

class Account {
  id: string;
  syncToken: string;
  metaData: ModificationMetaData;
  customField: CustomField[];
  attachableRef: AttachableRef[];
  domain: string;
  status:
    | "DELETED"
    | "VOIDED"
    | "DRAFT"
    | "PENDING"
    | "IN_TRANSIT"
    | "SYNCHRONIZED"
    | "SYNC_ERROR";
  sparse: boolean;
  name: string;
  subAccount: boolean;
  parentRef: ReferenceType;
  description: string;
  fullyQualifiedName: string;
  accountAlias: string;
  txnLocationType: string;
  active: boolean;
  classification: "ASSET" | "EQUITY" | "EXPENSE" | "LIABILITY" | "REVENUE";
  accountType:
    | "BANK"
    | "ACCOUNTS_RECEIVABLE"
    | "OTHER_CURRENT_ASSET"
    | "FIXED_ASSET"
    | "OTHER_ASSET"
    | "ACCOUNTS_PAYABLE"
    | "CREDIT_CARD"
    | "OTHER_CURRENT_LIABILITY"
    | "LONG_TERM_LIABILITY"
    | "EQUITY"
    | "INCOME"
    | "COST_OF_GOODS_SOLD"
    | "EXPENSE"
    | "OTHER_INCOME"
    | "OTHER_EXPENSE"
    | "NON_POSTING";
  accountSubType: string;
  accountPurposes: ReferenceType[];
  acctNum: string;
  acctNumExtn: string;
  bankNum: string;
  openingBalance: number;
  openingBalanceDate: string;
  currentBalance: number;
  currentBalanceWithSubAccounts: number;
  currencyRef: ReferenceType;
  taxAccount: boolean;
  taxCodeRef: ReferenceType;
  onlineBankingEnabled: boolean;
  journalCodeRef: ReferenceType;
  accountEx: IntuitAnyType;
  finame: string;

  constructor(
    _id: string,
    _syncToken: string,
    _metaData: ModificationMetaData,
    _customField: CustomField[],
    _attachableRef: AttachableRef[],
    _domain: string,
    _status:
      | "DELETED"
      | "VOIDED"
      | "DRAFT"
      | "PENDING"
      | "IN_TRANSIT"
      | "SYNCHRONIZED"
      | "SYNC_ERROR",
    _sparse: boolean,
    _name: string,
    _subAccount: boolean,
    _parentRef: ReferenceType,
    _description: string,
    _fullyQualifiedName: string,
    _accountAlias: string,
    _txnLocationType: string,
    _active: boolean,
    _classification: "ASSET" | "EQUITY" | "EXPENSE" | "LIABILITY" | "REVENUE",
    _accountType:
      | "BANK"
      | "ACCOUNTS_RECEIVABLE"
      | "OTHER_CURRENT_ASSET"
      | "FIXED_ASSET"
      | "OTHER_ASSET"
      | "ACCOUNTS_PAYABLE"
      | "CREDIT_CARD"
      | "OTHER_CURRENT_LIABILITY"
      | "LONG_TERM_LIABILITY"
      | "EQUITY"
      | "INCOME"
      | "COST_OF_GOODS_SOLD"
      | "EXPENSE"
      | "OTHER_INCOME"
      | "OTHER_EXPENSE"
      | "NON_POSTING",
    _accountSubType: string,
    _accountPurposes: ReferenceType[],
    _acctNum: string,
    _acctNumExtn: string,
    _bankNum: string,
    _openingBalance: number,
    _openingBalanceDate: string,
    _currentBalance: number,
    _currentBalanceWithSubAccounts: number,
    _currencyRef: ReferenceType,
    _taxAccount: boolean,
    _taxCodeRef: ReferenceType,
    _onlineBankingEnabled: boolean,
    _journalCodeRef: ReferenceType,
    _accountEx: IntuitAnyType,
    _finame: string
  ) {
    this.id = _id;
    this.syncToken = _syncToken;
    this.metaData = _metaData;
    this.customField = _customField;
    this.attachableRef = _attachableRef;
    this.domain = _domain;
    this.status = _status;
    this.sparse = _sparse;
    this.name = _name;
    this.subAccount = _subAccount;
    this.parentRef = _parentRef;
    this.description = _description;
    this.fullyQualifiedName = _fullyQualifiedName;
    this.accountAlias = _accountAlias;
    this.txnLocationType = _txnLocationType;
    this.active = _active;
    this.classification = _classification;
    this.accountType = _accountType;
    this.accountSubType = _accountSubType;
    this.accountPurposes = _accountPurposes;
    this.acctNum = _acctNum;
    this.acctNumExtn = _acctNumExtn;
    this.bankNum = _bankNum;
    this.openingBalance = _openingBalance;
    this.openingBalanceDate = _openingBalanceDate;
    this.currentBalance = _currentBalance;
    this.currentBalanceWithSubAccounts = _currentBalanceWithSubAccounts;
    this.currencyRef = _currencyRef;
    this.taxAccount = _taxAccount;
    this.taxCodeRef = _taxCodeRef;
    this.onlineBankingEnabled = _onlineBankingEnabled;
    this.journalCodeRef = _journalCodeRef;
    this.accountEx = _accountEx;
    this.finame = _finame;
  }
}

class QBSearchResponseAccount {
  count: number;
  responses: Account[];

  constructor(_count: number, _responses: Account[]) {
    this.count = _count;
    this.responses = _responses;
  }
}

class QBBillSearchRequest {
  page: number;
  pageSize: number;
  vendorId: string;
  metadataLastUpdatedTime: string;

  constructor(
    _page: number,
    _pageSize: number,
    _vendorId: string,
    _metadataLastUpdatedTime: string
  ) {
    this.page = _page;
    this.pageSize = _pageSize;
    this.vendorId = _vendorId;
    this.metadataLastUpdatedTime = _metadataLastUpdatedTime;
  }
}

class QBSearchResponseVendor {
  count: number;
  responses: Vendor[];

  constructor(_count: number, _responses: Vendor[]) {
    this.count = _count;
    this.responses = _responses;
  }
}

class QBVendorSearchRequest {
  page: number;
  pageSize: number;
  text: string;

  constructor(_page: number, _pageSize: number, _text: string) {
    this.page = _page;
    this.pageSize = _pageSize;
    this.text = _text;
  }
}

class QuickbooksLoginURL {
  url: string;

  constructor(_url: string) {
    this.url = _url;
  }
}

class QuickbooksLoginRequest {
  redirectURI: string;

  constructor(_redirectURI: string) {
    this.redirectURI = _redirectURI;
  }
}

class Report {
  id: string;
  name: string;
  foundationId: string;
  createdBy: string;
  updatedBy: string;
  components: FormItem[];
  created: string;
  updated: string;
  createdByUser: FoundationUser;
  updatedByUser: FoundationUser;
  submissionReports: ReportSubmission[];
  completedReports: number;
  pendingReports: number;

  constructor(
    _id: string,
    _name: string,
    _foundationId: string,
    _createdBy: string,
    _updatedBy: string,
    _components: FormItem[],
    _created: string,
    _updated: string,
    _createdByUser: FoundationUser,
    _updatedByUser: FoundationUser,
    _submissionReports: ReportSubmission[],
    _completedReports: number,
    _pendingReports: number
  ) {
    this.id = _id;
    this.name = _name;
    this.foundationId = _foundationId;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.components = _components;
    this.created = _created;
    this.updated = _updated;
    this.createdByUser = _createdByUser;
    this.updatedByUser = _updatedByUser;
    this.submissionReports = _submissionReports;
    this.completedReports = _completedReports;
    this.pendingReports = _pendingReports;
  }
}

class ReportSubmission {
  task: Task;
  taskSubmission: TaskSubmission;

  constructor(_task: Task, _taskSubmission: TaskSubmission) {
    this.task = _task;
    this.taskSubmission = _taskSubmission;
  }
}

class SubmissionEntity {
  component: FormItem;
  submissionResponses: SubmissionResponse[];

  constructor(
    _component: FormItem,
    _submissionResponses: SubmissionResponse[]
  ) {
    this.component = _component;
    this.submissionResponses = _submissionResponses;
  }
}

class SubmissionResponse {
  userId: string;
  submission: FormComponentSubmission;
  nonprofit: Nonprofit;
  foundation: Foundation;
  files: PresignedFile[];

  constructor(
    _userId: string,
    _submission: FormComponentSubmission,
    _nonprofit: Nonprofit,
    _foundation: Foundation,
    _files: PresignedFile[]
  ) {
    this.userId = _userId;
    this.submission = _submission;
    this.nonprofit = _nonprofit;
    this.foundation = _foundation;
    this.files = _files;
  }
}

class CommunicationEmailTemplate {
  id: string;
  subject: string;
  message: string;
  foundationId: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;

  constructor(
    _id: string,
    _subject: string,
    _message: string,
    _foundationId: string,
    _created_at: string,
    _created_by: string,
    _updated_at: string,
    _updated_by: string
  ) {
    this.id = _id;
    this.subject = _subject;
    this.message = _message;
    this.foundationId = _foundationId;
    this.created_at = _created_at;
    this.created_by = _created_by;
    this.updated_at = _updated_at;
    this.updated_by = _updated_by;
  }
}

class CommunicationPortalEmail {
  id: string;
  subject: string;
  message: string;
  recipients: CommunicationPortalEmailRecipients;
  createdAt: string;
  createdById: string;
  updatedAt: string;
  updatedById: string;
  sentAt: string;
  sentById: string;
  replyTo: string;
  foundationId: string;
  nonprofits: CommunicationPortalEmailNonprofit[];
  tokens: any;

  constructor(
    _id: string,
    _subject: string,
    _message: string,
    _recipients: CommunicationPortalEmailRecipients,
    _createdAt: string,
    _createdById: string,
    _updatedAt: string,
    _updatedById: string,
    _sentAt: string,
    _sentById: string,
    _replyTo: string,
    _foundationId: string,
    _nonprofits: CommunicationPortalEmailNonprofit[],
    _tokens: any
  ) {
    this.id = _id;
    this.subject = _subject;
    this.message = _message;
    this.recipients = _recipients;
    this.createdAt = _createdAt;
    this.createdById = _createdById;
    this.updatedAt = _updatedAt;
    this.updatedById = _updatedById;
    this.sentAt = _sentAt;
    this.sentById = _sentById;
    this.replyTo = _replyTo;
    this.foundationId = _foundationId;
    this.nonprofits = _nonprofits;
    this.tokens = _tokens;
  }
}

class CommunicationPortalEmailNonprofit {
  nonprofitId: string;
  selectUserIds: string[];

  constructor(_nonprofitId: string, _selectUserIds: string[]) {
    this.nonprofitId = _nonprofitId;
    this.selectUserIds = _selectUserIds;
  }
}

class CommunicationPortalEmailRecipients {
  to: string[];
  cc: string[];
  bcc: string[];

  constructor(_to: string[], _cc: string[], _bcc: string[]) {
    this.to = _to;
    this.cc = _cc;
    this.bcc = _bcc;
  }
}

class CommunicationPortalGetFoundationEmailsResponse {
  emails: CommunicationPortalEmail[];
  totalCount: number;

  constructor(_emails: CommunicationPortalEmail[], _totalCount: number) {
    this.emails = _emails;
    this.totalCount = _totalCount;
  }
}

class CommunicationPortalGetFoundationEmailsRequest {
  statuses: string[];
  page: number;
  pageSize: number;

  constructor(_statuses: string[], _page: number, _pageSize: number) {
    this.statuses = _statuses;
    this.page = _page;
    this.pageSize = _pageSize;
  }
}

class CommunicationPortalGetFoundationEmailResponse {
  email: CommunicationPortalEmail;

  constructor(_email: CommunicationPortalEmail) {
    this.email = _email;
  }
}

class DocumentItemResponse {
  foundationId: string;
  documentItem: DocumentItem;
  response: string;

  constructor(
    _foundationId: string,
    _documentItem: DocumentItem,
    _response: string
  ) {
    this.foundationId = _foundationId;
    this.documentItem = _documentItem;
    this.response = _response;
  }
}

class TaskWithSubmission {
  task: Task;
  taskSubmission: TaskSubmission;
  foundationNonprofitMetadata: FoundationNonprofitMetadata;
  crmFields: FoundationCRMField[];
  crmConfigurationFields: CRMConfigurationField[];
  foundationFieldResponses: DocumentItemResponse[];

  constructor(
    _task: Task,
    _taskSubmission: TaskSubmission,
    _foundationNonprofitMetadata: FoundationNonprofitMetadata,
    _crmFields: FoundationCRMField[],
    _crmConfigurationFields: CRMConfigurationField[],
    _foundationFieldResponses: DocumentItemResponse[]
  ) {
    this.task = _task;
    this.taskSubmission = _taskSubmission;
    this.foundationNonprofitMetadata = _foundationNonprofitMetadata;
    this.crmFields = _crmFields;
    this.crmConfigurationFields = _crmConfigurationFields;
    this.foundationFieldResponses = _foundationFieldResponses;
  }
}

class SalesforceLoginURL {
  loginURL: string;

  constructor(_loginURL: string) {
    this.loginURL = _loginURL;
  }
}

class SalesforceLoginRequest {
  redirectURI: string;

  constructor(_redirectURI: string) {
    this.redirectURI = _redirectURI;
  }
}

class FoundationSearchResponse {
  totalCount: number;
  responses: FoundationSearchResponseEntity[];

  constructor(
    _totalCount: number,
    _responses: FoundationSearchResponseEntity[]
  ) {
    this.totalCount = _totalCount;
    this.responses = _responses;
  }
}

class FoundationSearchQuery {
  page: number;
  pageSize: number;
  queryText: string;
  searchPeople: boolean;
  searchSubmissions: boolean;

  constructor(
    _page: number,
    _pageSize: number,
    _queryText: string,
    _searchPeople: boolean,
    _searchSubmissions: boolean
  ) {
    this.page = _page;
    this.pageSize = _pageSize;
    this.queryText = _queryText;
    this.searchPeople = _searchPeople;
    this.searchSubmissions = _searchSubmissions;
  }
}

class FoundationSearchBarQuery {
  page: number;
  pageSize: number;
  query: string;

  constructor(_page: number, _pageSize: number, _query: string) {
    this.page = _page;
    this.pageSize = _pageSize;
    this.query = _query;
  }
}

class NonprofitSearchEntity {
  sourceId: string;
  source: "EVERY" | "PROPUBLICA" | "TEMELIO";
  name: string;
  description: string;
  location: string;
  ein: string;
  hasFiscalSponsor: boolean;
  fiscalSponsorEIN: string;
  imageURL: string;
  tags: string[];
  nteeCode: string;
  nteeCodeDescription: string;
  legalStatusCode: number;
  legalStatusDescription: string;

  constructor(
    _sourceId: string,
    _source: "EVERY" | "PROPUBLICA" | "TEMELIO",
    _name: string,
    _description: string,
    _location: string,
    _ein: string,
    _hasFiscalSponsor: boolean,
    _fiscalSponsorEIN: string,
    _imageURL: string,
    _tags: string[],
    _nteeCode: string,
    _nteeCodeDescription: string,
    _legalStatusCode: number,
    _legalStatusDescription: string
  ) {
    this.sourceId = _sourceId;
    this.source = _source;
    this.name = _name;
    this.description = _description;
    this.location = _location;
    this.ein = _ein;
    this.hasFiscalSponsor = _hasFiscalSponsor;
    this.fiscalSponsorEIN = _fiscalSponsorEIN;
    this.imageURL = _imageURL;
    this.tags = _tags;
    this.nteeCode = _nteeCode;
    this.nteeCodeDescription = _nteeCodeDescription;
    this.legalStatusCode = _legalStatusCode;
    this.legalStatusDescription = _legalStatusDescription;
  }
}

class NonprofitSearchResponse {
  responses: NonprofitSearchEntity[];

  constructor(_responses: NonprofitSearchEntity[]) {
    this.responses = _responses;
  }
}

class NonprofitSearchQuery {
  page: number;
  pageSize: number;
  queryText: string;
  ein: string;
  fiscalEIN: string;

  constructor(
    _page: number,
    _pageSize: number,
    _queryText: string,
    _ein: string,
    _fiscalEIN: string
  ) {
    this.page = _page;
    this.pageSize = _pageSize;
    this.queryText = _queryText;
    this.ein = _ein;
    this.fiscalEIN = _fiscalEIN;
  }
}

class UniversalSearchDocument {
  id: string;
  foundationId: string;
  name: string;
  type:
    | "NONPROFIT"
    | "SUBMISSION"
    | "TASK"
    | "ADDITIONAL_CONTACT"
    | "NONPROFIT_USER"
    | "NOTES"
    | "TASK_COMMENT"
    | "SUBMISSION_COMMENT"
    | "FILE"
    | "DONOR_ENTITY"
    | "DONOR_ACTIVITY";
  alternativeText: string;
  email: string;
  userId: string;
  nonprofitName: string;
  nonprofitId: string;
  taskId: string;
  taskName: string;
  submissionId: string;
  submissionName: string;
  created: string;
  updated: string;
  updatedUser: string;
  fileId: string;
  donorEntityId: string;

  constructor(
    _id: string,
    _foundationId: string,
    _name: string,
    _type:
      | "NONPROFIT"
      | "SUBMISSION"
      | "TASK"
      | "ADDITIONAL_CONTACT"
      | "NONPROFIT_USER"
      | "NOTES"
      | "TASK_COMMENT"
      | "SUBMISSION_COMMENT"
      | "FILE"
      | "DONOR_ENTITY"
      | "DONOR_ACTIVITY",
    _alternativeText: string,
    _email: string,
    _userId: string,
    _nonprofitName: string,
    _nonprofitId: string,
    _taskId: string,
    _taskName: string,
    _submissionId: string,
    _submissionName: string,
    _created: string,
    _updated: string,
    _updatedUser: string,
    _fileId: string,
    _donorEntityId: string
  ) {
    this.id = _id;
    this.foundationId = _foundationId;
    this.name = _name;
    this.type = _type;
    this.alternativeText = _alternativeText;
    this.email = _email;
    this.userId = _userId;
    this.nonprofitName = _nonprofitName;
    this.nonprofitId = _nonprofitId;
    this.taskId = _taskId;
    this.taskName = _taskName;
    this.submissionId = _submissionId;
    this.submissionName = _submissionName;
    this.created = _created;
    this.updated = _updated;
    this.updatedUser = _updatedUser;
    this.fileId = _fileId;
    this.donorEntityId = _donorEntityId;
  }
}

class UniversalSearchResponse {
  hits: number;
  responses: UniversalSearchDocument[];

  constructor(_hits: number, _responses: UniversalSearchDocument[]) {
    this.hits = _hits;
    this.responses = _responses;
  }
}

class UniversalSearchQuery {
  query: string;
  numResults: number;
  typeFilterSet: string[];
  nonprofitFilterSet: string[];
  submissionFilterSet: string[];
  includeAll: boolean;

  constructor(
    _query: string,
    _numResults: number,
    _typeFilterSet: string[],
    _nonprofitFilterSet: string[],
    _submissionFilterSet: string[],
    _includeAll: boolean
  ) {
    this.query = _query;
    this.numResults = _numResults;
    this.typeFilterSet = _typeFilterSet;
    this.nonprofitFilterSet = _nonprofitFilterSet;
    this.submissionFilterSet = _submissionFilterSet;
    this.includeAll = _includeAll;
  }
}

class TaskSearchResponse {
  tasks: Task[];
  count: number;

  constructor(_tasks: Task[], _count: number) {
    this.tasks = _tasks;
    this.count = _count;
  }
}

class TaskSearchQuery {
  page: number;
  pageSize: number;
  queryText: string;
  foundationGranteeOwners: string[];
  nonprofitId: string;
  type: "CRM" | "GRANT_APPLICATION" | "REPORT" | "AGREEMENT_TEMPLATE" | "DONOR";
  sourceIds: string[];
  sourceTypes: string[];
  taskStatus: string[];
  taskType: "INTERNAL" | "EXTERNAL";
  systemLabels: string[];
  assignees: string[];
  neAssignees: string[];
  watchers: string[];
  foundationOnlyAssigned: boolean;
  granteeOnlyAssigned: boolean;
  unassigned: boolean;
  additionalSources: TaskSourceEntity[];

  constructor(
    _page: number,
    _pageSize: number,
    _queryText: string,
    _foundationGranteeOwners: string[],
    _nonprofitId: string,
    _type:
      | "CRM"
      | "GRANT_APPLICATION"
      | "REPORT"
      | "AGREEMENT_TEMPLATE"
      | "DONOR",
    _sourceIds: string[],
    _sourceTypes: string[],
    _taskStatus: string[],
    _taskType: "INTERNAL" | "EXTERNAL",
    _systemLabels: string[],
    _assignees: string[],
    _neAssignees: string[],
    _watchers: string[],
    _foundationOnlyAssigned: boolean,
    _granteeOnlyAssigned: boolean,
    _unassigned: boolean,
    _additionalSources: TaskSourceEntity[]
  ) {
    this.page = _page;
    this.pageSize = _pageSize;
    this.queryText = _queryText;
    this.foundationGranteeOwners = _foundationGranteeOwners;
    this.nonprofitId = _nonprofitId;
    this.type = _type;
    this.sourceIds = _sourceIds;
    this.sourceTypes = _sourceTypes;
    this.taskStatus = _taskStatus;
    this.taskType = _taskType;
    this.systemLabels = _systemLabels;
    this.assignees = _assignees;
    this.neAssignees = _neAssignees;
    this.watchers = _watchers;
    this.foundationOnlyAssigned = _foundationOnlyAssigned;
    this.granteeOnlyAssigned = _granteeOnlyAssigned;
    this.unassigned = _unassigned;
    this.additionalSources = _additionalSources;
  }
}

class TaskComment {
  id: string;
  taskId: string;
  createdBy: string;
  updatedBy: string;
  visibility: "INTERNAL" | "EXTERNAL";
  comment: string;
  created: string;
  updated: string;
  createdByFoundationUser: FoundationUser;
  createdByNonprofitUser: NonprofitUser;
  updatedByFoundationUser: FoundationUser;
  updatedByNonprofitUser: NonprofitUser;
  createdByUser: UserDetails;
  updatedByUser: UserDetails;

  constructor(
    _id: string,
    _taskId: string,
    _createdBy: string,
    _updatedBy: string,
    _visibility: "INTERNAL" | "EXTERNAL",
    _comment: string,
    _created: string,
    _updated: string,
    _createdByFoundationUser: FoundationUser,
    _createdByNonprofitUser: NonprofitUser,
    _updatedByFoundationUser: FoundationUser,
    _updatedByNonprofitUser: NonprofitUser,
    _createdByUser: UserDetails,
    _updatedByUser: UserDetails
  ) {
    this.id = _id;
    this.taskId = _taskId;
    this.createdBy = _createdBy;
    this.updatedBy = _updatedBy;
    this.visibility = _visibility;
    this.comment = _comment;
    this.created = _created;
    this.updated = _updated;
    this.createdByFoundationUser = _createdByFoundationUser;
    this.createdByNonprofitUser = _createdByNonprofitUser;
    this.updatedByFoundationUser = _updatedByFoundationUser;
    this.updatedByNonprofitUser = _updatedByNonprofitUser;
    this.createdByUser = _createdByUser;
    this.updatedByUser = _updatedByUser;
  }
}

class BulkTaskSubmissionRequest {
  taskIds: string[];

  constructor(_taskIds: string[]) {
    this.taskIds = _taskIds;
  }
}

class UserBearer {
  bearer: string;

  constructor(_bearer: string) {
    this.bearer = _bearer;
  }
}

class GetNonprofitResult {
  total: number;
  data: Nonprofit[];

  constructor(_total: number, _data: Nonprofit[]) {
    this.total = _total;
    this.data = _data;
  }
}

class GetNonprofitMetadataResult {
  data: NonprofitMetadata[];
  total: number;

  constructor(_data: NonprofitMetadata[], _total: number) {
    this.data = _data;
    this.total = _total;
  }
}

class GetNonprofitUserResult {
  data: NonprofitUser[];
  total: number;

  constructor(_data: NonprofitUser[], _total: number) {
    this.data = _data;
    this.total = _total;
  }
}
