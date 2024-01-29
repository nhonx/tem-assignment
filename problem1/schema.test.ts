
    import { describe, expect, test } from "@jest/globals";
    import  {DisplayCondition,FormComponentSubmission,FormItem,FormItemOptions,FormItemResponseEntity,FormItemValue,FormOptionEntity,FormPDFResponseData,TableDisplayCell,TableDisplayContent,TableDisplayRow,TableResponseCell,TableSubmissionRow,DeleteFileInfo,Foundation,FoundationUser,NonprofitUser,OfacFlags,OfacSdn,PresignedFile,UploadedFile,UserFoundationRole,UserNonprofitRole,Address,FiscalSponsor,FoundationNonprofitCreateRequest,AppUser,UpdateAppUserRequest,AdditionalContact,FoundationNonprofitInteraction,IRS990Details,InteractionAdditionalInfo,QBVendorDetails,DocusignTokenResponse,DocusignUserFoundationSettings,NotificationSetting,NylasAccessToken,NylasUserFoundationSettings,SystemNotifications,UserBrandingSettings,UserFoundationSettings,UserPipelineSettings,Faceting,Pagination,SwapIndexesParams,Task,TaskDetails,TaskError,TypoTolerance,CandidEntityResponse,DemographicsCategory,DemographicsData,DemographicsDetails,DemographicsResponse,DemographicsStaffLevelTotals,DemographicsSubcategory,DemographicsSummary,PremierAccountingRatio,PremierAccreditation,PremierAddress,PremierAnnualReport,PremierBalanceSheetComposition,PremierBoardLeadershipPractice,PremierBoardOfDirector,PremierBusinessModelIndicators,PremierCapitalStructureIndicators,PremierCategory,PremierCharitycheck,PremierChartingImpactAnswer,PremierContractor,PremierData,PremierDemographics,PremierEquityStrategies,PremierExpenseComposition,PremierF990Financial,PremierFeedbackResponse,PremierFinancialDocument,PremierFinancialStatement,PremierFinancialTrendsAnalysis,PremierFinancials,PremierFormerlyKnownA,PremierForms990T,PremierFullCostComponents,PremierFundingSource,PremierHighestPaidEmployee,PremierKeyDataChecks,PremierLettersOfDetermination,PremierLiquidity,PremierMostRecentYearFinancials,PremierNaicsCode,PremierNteeCode,PremierOfficersDirectorsKeyEmployee,PremierOperations,PremierOrgDoesNotCollectFor,PremierOrganizationDemographics,PremierOrganizationType,PremierOtherDocument,PremierOtherStaff,PremierPart10BalanceSheet,PremierPart8Revenue,PremierPart9Expenses,PremierPcsCode,PremierPhoto,PremierPlatinumEvaluationDocument,PremierProfileDataChangeDates,PremierProfileSdgCode,PremierProfitability,PremierProgram,PremierProgramPlatinumMetric,PremierPrograms,PremierResponse,PremierRevenueComposition,PremierSdg,PremierSicCode,PremierStaffLevel,PremierStaffLevelTotals,PremierSubcategory,PremierSummary,PremierTelephoneNumber,PremierVideo,PremierYear,Exception,Function0,Function0Object,LongRunningTask,LongRunningTaskObject,StackTraceElement,Throwable,IndexRequest,NylasSyncRequest,AnvilPDFAdditionalInfo,AnvilPDFField,Budget,BudgetAllocation,CRMConfiguration,CRMConfigurationField,CRMExternalConfigProperty,ConfigurationSettings,CustomEmailTemplate,CustomGrantType,DocumentItem,ExternalReviewerConfiguration,ExternalReviewerTableConfiguration,FeatureSet,FoundationCRMField,FoundationMailSettings,FoundationMetadata,FoundationMetadataTag,FoundationQuickbooksSetting,FoundationReviewerUser,FoundationSalesforceConfiguration,GrantStage,GrantStageWorkflow,GrantTypeConfiguration,GranteeProfileUpdate,GranteeProfileUpdateConfiguration,MailChimpFoundationConfiguration,MetabaseConfiguration,MetabaseDashboardUrl,Pipeline,QBPaymentDestination,QBPaymentSource,QBPaymentSyncSetting,SalesforceEntityToUpdate,SalesforceSyncRequest,SalesforceTokenResponse,ScoringCriteria,TaskTemplate,TaskTemplateAdditionalInfo,TemelioSalesforceFieldMapping,NonprofitIRSUpdateRequest,NonprofitAdditionalInfo,NonprofitIRSData,NonprofitMetadata,PlaidData,Nonprofit,AwardStatistics,BudgetCategoryAllocation,BudgetCategoryYOYData,Currency,CustomGrantTypeAllocation,CustomGrantTypeYOYData,DashboardResponse,FirstFormDetails,FiscalRange,FiscalYearData,FormBuilder,FoundationTagAllocation,GrantAdditionalInfo,GrantAdditionalInfoEntity,GrantAmount,GrantDuration,GrantEligibility,GrantFormAdditionalInfo,GrantFormProposal,GrantPayment,GrantPaymentSummary,GrantProposalSubmission,GrantRefereeConfig,GrantRefereeInfo,GrantRefereeRequestConfig,GrantRefereeRequestDetail,GrantTypeAllocation,GrantTypeYOYData,MultiFormResponse,MultipleFormInfo,NonprofitAmount,PaymentAdditionalInfo,QBPaymentDetails,TagYOYData,TaskTemplateAssignee,TipTapAttrs,TipTapTextBlock,YOYData,YearlyData,AggregateExecDashboardRequest,AggregateUniversalFoundationSearchResponse,AggregateUniversalSearchResponse,CRMSubmissionDetails,FoundationNonprofitMetadata,FoundationSearchResponseEntity,AggregateUniversalSearchQuery,AggregateContactResponse,AggregateFoundationCRMResponse,AggregateContactSearchRequest,AggregateDashboardResponse,AggregateFoundationProposalSummary,AggregateGrantAnalysis,AnvilPDFFieldResponse,AnvilPDFFieldResponses,AnvilPaymentDetails,DonorActivity,DonorActivityAdditionalInfo,DonorContribution,DonorContributionComment,DonorData,DonorEntity,DonorRelationship,DonorTag,EntityDetails,FoundationProposalSummary,GrantSubmissionSearchResponse,PipelineProposalSummary,ProposalStageResult,SignatureOrder,SignatureStatusDetails,TaskAdditionalInfo,TaskSourceEntity,UserDetails,AggregateDashboardRequest,DataColumn,DataRow,DataSearchResponse,AggregateDataSearchRequest,BoardProposalValues,DocumentFieldResponse,BoardBook,BoardBookSummarySheet,BoardGrantProposal,BoardGrantProposalAdditionalInfo,PDFDocumentDisplay,BoardProposalSearchResponse,BoardProposalSearchQuery,BoardGeneratorRequest,AnalyticsField,AnalyticsFieldPaymentResponse,AnalyticsFieldSubmissionInfo,AnalyticsFieldValue,AnalyticsFieldYOYData,AnalyticsPaymentYOYData,AnalyticsResponse,AnalyticsRequest,DataSearchQuery,DocumentTemplate,DocumentTemplateAdditionalInfo,DocusignAdditionalInfo,DocusignEnvelope,Envelope,Recipients,Sender,Signer,DocusignLoginURL,DocusignLoginRequest,AccountInfo,DocusignSenderViewResponse,EnvelopeRecipient,EnvelopeSendRequest,DonorEntityType,DonorRelationshipType,EligibilityConfiguration,EligibilityEmailTemplate,EligibilityForm,UniversalForm,AssignExternalReviewerRequest,ExternalReviewerDashboard,TaskSubmission,FileMeta,FileCopyPair,Folder,AdditionalFilterInfo,FilterView,FilterViewCondition,FilterViewFilter,FilterViewRename,FilterViewSettings,FilterViewSorting,FilterViewVisibility,NonprofitGrantPair,NonprofitGrantSubmission,GrantEligibilityResponse,EligibilityFormResponses,FoundationPaymentField,PaymentSearchResponse,PaymentSearchQuery,BankInfoDownloadRequest,CRMSearchResponse,ContactsResponse,CRMSearchQuery,FilterOption,SortOption,ContactsRequest,LandingPage,GetFoundationNonprofitUsersResponse,FoundationProposals,FilteredProposalCell,FilteredProposalColumn,FilteredProposalRow,GetFilteredProposalsResponse,GetFilteredBulkProposalsResponse,BulkFilterProposalsRequest,CreateTaskReviewerRequest,PostmarkMessage,PostmarkMessageEvent,PostmarkMessageEventDetails,PostmarkRecipient,FoundationNonprofitActivity,FoundationNotes,GrantSubmissionStatusChange,NylasFolder,NylasLabel,NylasParticipant,NylasThread,NylasThreadGroup,StatusChangeData,FoundationNonprofitPaymentSummary,NonprofitMergeRequest,PostmarkOutboundSearchResponse,FoundationNonprofitGrantSummary,NumbersACH,AccountBalance,AccountBase,AuthMetadata,AuthSupportedMethods,BankAccountDetail,HealthIncident,IncidentUpdate,Institution,InstitutionStatus,PaymentInitiationMetadata,PaymentInitiationStandingOrderMetadata,ProductStatus,ProductStatusBreakdown,BulkNonprofitUserUpdate,AccountBasedExpenseLineDetail,AttachableRef,Bill,ContactInfo,CustomField,DepositLineDetail,DescriptionLineDetail,DiscountLineDetail,DiscountOverride,EmailAddress,EntityTypeRef,GenericContactType,GroupLineDetail,IntuitAnyType,ItemAdjustmentLineDetail,ItemBasedExpenseLineDetail,ItemReceiptLineDetail,JournalEntryLineDetail,Line,LinkedTxn,MarkupInfo,ModificationMetaData,PaymentLineDetail,PhysicalAddress,PurchaseOrderItemLineDetail,QBSearchResponse,QBSearchResponseBill,QuickbooksNonprofitDetails,RecurringInfo,RecurringScheduleInfo,ReferenceType,ReimburseLineDetail,SalesItemLineDetail,SalesOrderItemLineDetail,SubTotalLineDetail,TDSLineDetail,Tag,TaxLineDetail,TelephoneNumber,TxnApprovalInfo,TxnTaxDetail,UOMRef,Vendor,VendorBankAccountDetail,WebSiteAddress,HTMLRequest,SubmissionRequest,GrantTemplate,BulkActionRequest,BulkCreatePaymentRequest,BulkCreateReminderRequest,BulkCreateReportRequest,SubmissionGranteePair,GrantProposalSubmissionReminder,GrantProposalSubmissionDeltaResponse,GrantSubmissionChange,SubmissionTasks,ManualGrantLog,SubmissionComment,BulkDownloadRequest,GrantSubmissionSearchQuery,ReviewEntity,ReviewScores,UserReviewResponse,EntitySuggestionResponse,ResponseEntitySuggestion,SubmissionSuggestionResponses,SuggestionResponseSource,QuestionAnswerPair,SuggestedResponsesRequest,NonprofitGrantRefereeStatus,MailChimpAuthUrl,MailChimpAddress,MailChimpCampaign,MailChimpList,NonprofitCreateRequest,Notification,NotificationContent,NotificationResponse,NotificationUser,NotificationQuery,NylasFile,NylasMessage,NylasFileRequest,NylasLoginURL,PlaidLinkTokenResponse,PlaidTokenExchangeResponse,PlaidTokenExchangeRequest,Account,QBSearchResponseAccount,QBBillSearchRequest,QBSearchResponseVendor,QBVendorSearchRequest,QuickbooksLoginURL,QuickbooksLoginRequest,Report,ReportSubmission,SubmissionEntity,SubmissionResponse,CommunicationEmailTemplate,CommunicationPortalEmail,CommunicationPortalEmailNonprofit,CommunicationPortalEmailRecipients,CommunicationPortalGetFoundationEmailsResponse,CommunicationPortalGetFoundationEmailsRequest,CommunicationPortalGetFoundationEmailResponse,DocumentItemResponse,TaskWithSubmission,SalesforceLoginURL,SalesforceLoginRequest,FoundationSearchResponse,FoundationSearchQuery,FoundationSearchBarQuery,NonprofitSearchEntity,NonprofitSearchResponse,NonprofitSearchQuery,UniversalSearchDocument,UniversalSearchResponse,UniversalSearchQuery,TaskSearchResponse,TaskSearchQuery,TaskComment,BulkTaskSubmissionRequest,UserBearer,GetNonprofitResult,GetNonprofitMetadataResult,GetNonprofitUserResult} from "./schema";

    
        describe("DisplayCondition model", () => {
            test("constructor", () => {
              var obj = new DisplayCondition();
              expect(obj).toBeInstanceOf(DisplayCondition);
            });
          });
        
        describe("FormComponentSubmission model", () => {
            test("constructor", () => {
              var obj = new FormComponentSubmission();
              expect(obj).toBeInstanceOf(FormComponentSubmission);
            });
          });
        
        describe("FormItem model", () => {
            test("constructor", () => {
              var obj = new FormItem();
              expect(obj).toBeInstanceOf(FormItem);
            });
          });
        
        describe("FormItemOptions model", () => {
            test("constructor", () => {
              var obj = new FormItemOptions();
              expect(obj).toBeInstanceOf(FormItemOptions);
            });
          });
        
        describe("FormItemResponseEntity model", () => {
            test("constructor", () => {
              var obj = new FormItemResponseEntity();
              expect(obj).toBeInstanceOf(FormItemResponseEntity);
            });
          });
        
        describe("FormItemValue model", () => {
            test("constructor", () => {
              var obj = new FormItemValue();
              expect(obj).toBeInstanceOf(FormItemValue);
            });
          });
        
        describe("FormOptionEntity model", () => {
            test("constructor", () => {
              var obj = new FormOptionEntity();
              expect(obj).toBeInstanceOf(FormOptionEntity);
            });
          });
        
        describe("FormPDFResponseData model", () => {
            test("constructor", () => {
              var obj = new FormPDFResponseData();
              expect(obj).toBeInstanceOf(FormPDFResponseData);
            });
          });
        
        describe("TableDisplayCell model", () => {
            test("constructor", () => {
              var obj = new TableDisplayCell();
              expect(obj).toBeInstanceOf(TableDisplayCell);
            });
          });
        
        describe("TableDisplayContent model", () => {
            test("constructor", () => {
              var obj = new TableDisplayContent();
              expect(obj).toBeInstanceOf(TableDisplayContent);
            });
          });
        
        describe("TableDisplayRow model", () => {
            test("constructor", () => {
              var obj = new TableDisplayRow();
              expect(obj).toBeInstanceOf(TableDisplayRow);
            });
          });
        
        describe("TableResponseCell model", () => {
            test("constructor", () => {
              var obj = new TableResponseCell();
              expect(obj).toBeInstanceOf(TableResponseCell);
            });
          });
        
        describe("TableSubmissionRow model", () => {
            test("constructor", () => {
              var obj = new TableSubmissionRow();
              expect(obj).toBeInstanceOf(TableSubmissionRow);
            });
          });
        
        describe("DeleteFileInfo model", () => {
            test("constructor", () => {
              var obj = new DeleteFileInfo();
              expect(obj).toBeInstanceOf(DeleteFileInfo);
            });
          });
        
        describe("Foundation model", () => {
            test("constructor", () => {
              var obj = new Foundation();
              expect(obj).toBeInstanceOf(Foundation);
            });
          });
        
        describe("FoundationUser model", () => {
            test("constructor", () => {
              var obj = new FoundationUser();
              expect(obj).toBeInstanceOf(FoundationUser);
            });
          });
        
        describe("NonprofitUser model", () => {
            test("constructor", () => {
              var obj = new NonprofitUser();
              expect(obj).toBeInstanceOf(NonprofitUser);
            });
          });
        
        describe("OfacFlags model", () => {
            test("constructor", () => {
              var obj = new OfacFlags();
              expect(obj).toBeInstanceOf(OfacFlags);
            });
          });
        
        describe("OfacSdn model", () => {
            test("constructor", () => {
              var obj = new OfacSdn();
              expect(obj).toBeInstanceOf(OfacSdn);
            });
          });
        
        describe("PresignedFile model", () => {
            test("constructor", () => {
              var obj = new PresignedFile();
              expect(obj).toBeInstanceOf(PresignedFile);
            });
          });
        
        describe("UploadedFile model", () => {
            test("constructor", () => {
              var obj = new UploadedFile();
              expect(obj).toBeInstanceOf(UploadedFile);
            });
          });
        
        describe("UserFoundationRole model", () => {
            test("constructor", () => {
              var obj = new UserFoundationRole();
              expect(obj).toBeInstanceOf(UserFoundationRole);
            });
          });
        
        describe("UserNonprofitRole model", () => {
            test("constructor", () => {
              var obj = new UserNonprofitRole();
              expect(obj).toBeInstanceOf(UserNonprofitRole);
            });
          });
        
        describe("Address model", () => {
            test("constructor", () => {
              var obj = new Address();
              expect(obj).toBeInstanceOf(Address);
            });
          });
        
        describe("FiscalSponsor model", () => {
            test("constructor", () => {
              var obj = new FiscalSponsor();
              expect(obj).toBeInstanceOf(FiscalSponsor);
            });
          });
        
        describe("FoundationNonprofitCreateRequest model", () => {
            test("constructor", () => {
              var obj = new FoundationNonprofitCreateRequest();
              expect(obj).toBeInstanceOf(FoundationNonprofitCreateRequest);
            });
          });
        
        describe("AppUser model", () => {
            test("constructor", () => {
              var obj = new AppUser();
              expect(obj).toBeInstanceOf(AppUser);
            });
          });
        
        describe("UpdateAppUserRequest model", () => {
            test("constructor", () => {
              var obj = new UpdateAppUserRequest();
              expect(obj).toBeInstanceOf(UpdateAppUserRequest);
            });
          });
        
        describe("AdditionalContact model", () => {
            test("constructor", () => {
              var obj = new AdditionalContact();
              expect(obj).toBeInstanceOf(AdditionalContact);
            });
          });
        
        describe("FoundationNonprofitInteraction model", () => {
            test("constructor", () => {
              var obj = new FoundationNonprofitInteraction();
              expect(obj).toBeInstanceOf(FoundationNonprofitInteraction);
            });
          });
        
        describe("IRS990Details model", () => {
            test("constructor", () => {
              var obj = new IRS990Details();
              expect(obj).toBeInstanceOf(IRS990Details);
            });
          });
        
        describe("InteractionAdditionalInfo model", () => {
            test("constructor", () => {
              var obj = new InteractionAdditionalInfo();
              expect(obj).toBeInstanceOf(InteractionAdditionalInfo);
            });
          });
        
        describe("QBVendorDetails model", () => {
            test("constructor", () => {
              var obj = new QBVendorDetails();
              expect(obj).toBeInstanceOf(QBVendorDetails);
            });
          });
        
        describe("DocusignTokenResponse model", () => {
            test("constructor", () => {
              var obj = new DocusignTokenResponse();
              expect(obj).toBeInstanceOf(DocusignTokenResponse);
            });
          });
        
        describe("DocusignUserFoundationSettings model", () => {
            test("constructor", () => {
              var obj = new DocusignUserFoundationSettings();
              expect(obj).toBeInstanceOf(DocusignUserFoundationSettings);
            });
          });
        
        describe("NotificationSetting model", () => {
            test("constructor", () => {
              var obj = new NotificationSetting();
              expect(obj).toBeInstanceOf(NotificationSetting);
            });
          });
        
        describe("NylasAccessToken model", () => {
            test("constructor", () => {
              var obj = new NylasAccessToken();
              expect(obj).toBeInstanceOf(NylasAccessToken);
            });
          });
        
        describe("NylasUserFoundationSettings model", () => {
            test("constructor", () => {
              var obj = new NylasUserFoundationSettings();
              expect(obj).toBeInstanceOf(NylasUserFoundationSettings);
            });
          });
        
        describe("SystemNotifications model", () => {
            test("constructor", () => {
              var obj = new SystemNotifications();
              expect(obj).toBeInstanceOf(SystemNotifications);
            });
          });
        
        describe("UserBrandingSettings model", () => {
            test("constructor", () => {
              var obj = new UserBrandingSettings();
              expect(obj).toBeInstanceOf(UserBrandingSettings);
            });
          });
        
        describe("UserFoundationSettings model", () => {
            test("constructor", () => {
              var obj = new UserFoundationSettings();
              expect(obj).toBeInstanceOf(UserFoundationSettings);
            });
          });
        
        describe("UserPipelineSettings model", () => {
            test("constructor", () => {
              var obj = new UserPipelineSettings();
              expect(obj).toBeInstanceOf(UserPipelineSettings);
            });
          });
        
        describe("Faceting model", () => {
            test("constructor", () => {
              var obj = new Faceting();
              expect(obj).toBeInstanceOf(Faceting);
            });
          });
        
        describe("Pagination model", () => {
            test("constructor", () => {
              var obj = new Pagination();
              expect(obj).toBeInstanceOf(Pagination);
            });
          });
        
        describe("SwapIndexesParams model", () => {
            test("constructor", () => {
              var obj = new SwapIndexesParams();
              expect(obj).toBeInstanceOf(SwapIndexesParams);
            });
          });
        
        describe("Task model", () => {
            test("constructor", () => {
              var obj = new Task();
              expect(obj).toBeInstanceOf(Task);
            });
          });
        
        describe("TaskDetails model", () => {
            test("constructor", () => {
              var obj = new TaskDetails();
              expect(obj).toBeInstanceOf(TaskDetails);
            });
          });
        
        describe("TaskError model", () => {
            test("constructor", () => {
              var obj = new TaskError();
              expect(obj).toBeInstanceOf(TaskError);
            });
          });
        
        describe("TypoTolerance model", () => {
            test("constructor", () => {
              var obj = new TypoTolerance();
              expect(obj).toBeInstanceOf(TypoTolerance);
            });
          });
        
        describe("CandidEntityResponse model", () => {
            test("constructor", () => {
              var obj = new CandidEntityResponse();
              expect(obj).toBeInstanceOf(CandidEntityResponse);
            });
          });
        
        describe("DemographicsCategory model", () => {
            test("constructor", () => {
              var obj = new DemographicsCategory();
              expect(obj).toBeInstanceOf(DemographicsCategory);
            });
          });
        
        describe("DemographicsData model", () => {
            test("constructor", () => {
              var obj = new DemographicsData();
              expect(obj).toBeInstanceOf(DemographicsData);
            });
          });
        
        describe("DemographicsDetails model", () => {
            test("constructor", () => {
              var obj = new DemographicsDetails();
              expect(obj).toBeInstanceOf(DemographicsDetails);
            });
          });
        
        describe("DemographicsResponse model", () => {
            test("constructor", () => {
              var obj = new DemographicsResponse();
              expect(obj).toBeInstanceOf(DemographicsResponse);
            });
          });
        
        describe("DemographicsStaffLevelTotals model", () => {
            test("constructor", () => {
              var obj = new DemographicsStaffLevelTotals();
              expect(obj).toBeInstanceOf(DemographicsStaffLevelTotals);
            });
          });
        
        describe("DemographicsSubcategory model", () => {
            test("constructor", () => {
              var obj = new DemographicsSubcategory();
              expect(obj).toBeInstanceOf(DemographicsSubcategory);
            });
          });
        
        describe("DemographicsSummary model", () => {
            test("constructor", () => {
              var obj = new DemographicsSummary();
              expect(obj).toBeInstanceOf(DemographicsSummary);
            });
          });
        
        describe("PremierAccountingRatio model", () => {
            test("constructor", () => {
              var obj = new PremierAccountingRatio();
              expect(obj).toBeInstanceOf(PremierAccountingRatio);
            });
          });
        
        describe("PremierAccreditation model", () => {
            test("constructor", () => {
              var obj = new PremierAccreditation();
              expect(obj).toBeInstanceOf(PremierAccreditation);
            });
          });
        
        describe("PremierAddress model", () => {
            test("constructor", () => {
              var obj = new PremierAddress();
              expect(obj).toBeInstanceOf(PremierAddress);
            });
          });
        
        describe("PremierAnnualReport model", () => {
            test("constructor", () => {
              var obj = new PremierAnnualReport();
              expect(obj).toBeInstanceOf(PremierAnnualReport);
            });
          });
        
        describe("PremierBalanceSheetComposition model", () => {
            test("constructor", () => {
              var obj = new PremierBalanceSheetComposition();
              expect(obj).toBeInstanceOf(PremierBalanceSheetComposition);
            });
          });
        
        describe("PremierBoardLeadershipPractice model", () => {
            test("constructor", () => {
              var obj = new PremierBoardLeadershipPractice();
              expect(obj).toBeInstanceOf(PremierBoardLeadershipPractice);
            });
          });
        
        describe("PremierBoardOfDirector model", () => {
            test("constructor", () => {
              var obj = new PremierBoardOfDirector();
              expect(obj).toBeInstanceOf(PremierBoardOfDirector);
            });
          });
        
        describe("PremierBusinessModelIndicators model", () => {
            test("constructor", () => {
              var obj = new PremierBusinessModelIndicators();
              expect(obj).toBeInstanceOf(PremierBusinessModelIndicators);
            });
          });
        
        describe("PremierCapitalStructureIndicators model", () => {
            test("constructor", () => {
              var obj = new PremierCapitalStructureIndicators();
              expect(obj).toBeInstanceOf(PremierCapitalStructureIndicators);
            });
          });
        
        describe("PremierCategory model", () => {
            test("constructor", () => {
              var obj = new PremierCategory();
              expect(obj).toBeInstanceOf(PremierCategory);
            });
          });
        
        describe("PremierCharitycheck model", () => {
            test("constructor", () => {
              var obj = new PremierCharitycheck();
              expect(obj).toBeInstanceOf(PremierCharitycheck);
            });
          });
        
        describe("PremierChartingImpactAnswer model", () => {
            test("constructor", () => {
              var obj = new PremierChartingImpactAnswer();
              expect(obj).toBeInstanceOf(PremierChartingImpactAnswer);
            });
          });
        
        describe("PremierContractor model", () => {
            test("constructor", () => {
              var obj = new PremierContractor();
              expect(obj).toBeInstanceOf(PremierContractor);
            });
          });
        
        describe("PremierData model", () => {
            test("constructor", () => {
              var obj = new PremierData();
              expect(obj).toBeInstanceOf(PremierData);
            });
          });
        
        describe("PremierDemographics model", () => {
            test("constructor", () => {
              var obj = new PremierDemographics();
              expect(obj).toBeInstanceOf(PremierDemographics);
            });
          });
        
        describe("PremierEquityStrategies model", () => {
            test("constructor", () => {
              var obj = new PremierEquityStrategies();
              expect(obj).toBeInstanceOf(PremierEquityStrategies);
            });
          });
        
        describe("PremierExpenseComposition model", () => {
            test("constructor", () => {
              var obj = new PremierExpenseComposition();
              expect(obj).toBeInstanceOf(PremierExpenseComposition);
            });
          });
        
        describe("PremierF990Financial model", () => {
            test("constructor", () => {
              var obj = new PremierF990Financial();
              expect(obj).toBeInstanceOf(PremierF990Financial);
            });
          });
        
        describe("PremierFeedbackResponse model", () => {
            test("constructor", () => {
              var obj = new PremierFeedbackResponse();
              expect(obj).toBeInstanceOf(PremierFeedbackResponse);
            });
          });
        
        describe("PremierFinancialDocument model", () => {
            test("constructor", () => {
              var obj = new PremierFinancialDocument();
              expect(obj).toBeInstanceOf(PremierFinancialDocument);
            });
          });
        
        describe("PremierFinancialStatement model", () => {
            test("constructor", () => {
              var obj = new PremierFinancialStatement();
              expect(obj).toBeInstanceOf(PremierFinancialStatement);
            });
          });
        
        describe("PremierFinancialTrendsAnalysis model", () => {
            test("constructor", () => {
              var obj = new PremierFinancialTrendsAnalysis();
              expect(obj).toBeInstanceOf(PremierFinancialTrendsAnalysis);
            });
          });
        
        describe("PremierFinancials model", () => {
            test("constructor", () => {
              var obj = new PremierFinancials();
              expect(obj).toBeInstanceOf(PremierFinancials);
            });
          });
        
        describe("PremierFormerlyKnownA model", () => {
            test("constructor", () => {
              var obj = new PremierFormerlyKnownA();
              expect(obj).toBeInstanceOf(PremierFormerlyKnownA);
            });
          });
        
        describe("PremierForms990T model", () => {
            test("constructor", () => {
              var obj = new PremierForms990T();
              expect(obj).toBeInstanceOf(PremierForms990T);
            });
          });
        
        describe("PremierFullCostComponents model", () => {
            test("constructor", () => {
              var obj = new PremierFullCostComponents();
              expect(obj).toBeInstanceOf(PremierFullCostComponents);
            });
          });
        
        describe("PremierFundingSource model", () => {
            test("constructor", () => {
              var obj = new PremierFundingSource();
              expect(obj).toBeInstanceOf(PremierFundingSource);
            });
          });
        
        describe("PremierHighestPaidEmployee model", () => {
            test("constructor", () => {
              var obj = new PremierHighestPaidEmployee();
              expect(obj).toBeInstanceOf(PremierHighestPaidEmployee);
            });
          });
        
        describe("PremierKeyDataChecks model", () => {
            test("constructor", () => {
              var obj = new PremierKeyDataChecks();
              expect(obj).toBeInstanceOf(PremierKeyDataChecks);
            });
          });
        
        describe("PremierLettersOfDetermination model", () => {
            test("constructor", () => {
              var obj = new PremierLettersOfDetermination();
              expect(obj).toBeInstanceOf(PremierLettersOfDetermination);
            });
          });
        
        describe("PremierLiquidity model", () => {
            test("constructor", () => {
              var obj = new PremierLiquidity();
              expect(obj).toBeInstanceOf(PremierLiquidity);
            });
          });
        
        describe("PremierMostRecentYearFinancials model", () => {
            test("constructor", () => {
              var obj = new PremierMostRecentYearFinancials();
              expect(obj).toBeInstanceOf(PremierMostRecentYearFinancials);
            });
          });
        
        describe("PremierNaicsCode model", () => {
            test("constructor", () => {
              var obj = new PremierNaicsCode();
              expect(obj).toBeInstanceOf(PremierNaicsCode);
            });
          });
        
        describe("PremierNteeCode model", () => {
            test("constructor", () => {
              var obj = new PremierNteeCode();
              expect(obj).toBeInstanceOf(PremierNteeCode);
            });
          });
        
        describe("PremierOfficersDirectorsKeyEmployee model", () => {
            test("constructor", () => {
              var obj = new PremierOfficersDirectorsKeyEmployee();
              expect(obj).toBeInstanceOf(PremierOfficersDirectorsKeyEmployee);
            });
          });
        
        describe("PremierOperations model", () => {
            test("constructor", () => {
              var obj = new PremierOperations();
              expect(obj).toBeInstanceOf(PremierOperations);
            });
          });
        
        describe("PremierOrgDoesNotCollectFor model", () => {
            test("constructor", () => {
              var obj = new PremierOrgDoesNotCollectFor();
              expect(obj).toBeInstanceOf(PremierOrgDoesNotCollectFor);
            });
          });
        
        describe("PremierOrganizationDemographics model", () => {
            test("constructor", () => {
              var obj = new PremierOrganizationDemographics();
              expect(obj).toBeInstanceOf(PremierOrganizationDemographics);
            });
          });
        
        describe("PremierOrganizationType model", () => {
            test("constructor", () => {
              var obj = new PremierOrganizationType();
              expect(obj).toBeInstanceOf(PremierOrganizationType);
            });
          });
        
        describe("PremierOtherDocument model", () => {
            test("constructor", () => {
              var obj = new PremierOtherDocument();
              expect(obj).toBeInstanceOf(PremierOtherDocument);
            });
          });
        
        describe("PremierOtherStaff model", () => {
            test("constructor", () => {
              var obj = new PremierOtherStaff();
              expect(obj).toBeInstanceOf(PremierOtherStaff);
            });
          });
        
        describe("PremierPart10BalanceSheet model", () => {
            test("constructor", () => {
              var obj = new PremierPart10BalanceSheet();
              expect(obj).toBeInstanceOf(PremierPart10BalanceSheet);
            });
          });
        
        describe("PremierPart8Revenue model", () => {
            test("constructor", () => {
              var obj = new PremierPart8Revenue();
              expect(obj).toBeInstanceOf(PremierPart8Revenue);
            });
          });
        
        describe("PremierPart9Expenses model", () => {
            test("constructor", () => {
              var obj = new PremierPart9Expenses();
              expect(obj).toBeInstanceOf(PremierPart9Expenses);
            });
          });
        
        describe("PremierPcsCode model", () => {
            test("constructor", () => {
              var obj = new PremierPcsCode();
              expect(obj).toBeInstanceOf(PremierPcsCode);
            });
          });
        
        describe("PremierPhoto model", () => {
            test("constructor", () => {
              var obj = new PremierPhoto();
              expect(obj).toBeInstanceOf(PremierPhoto);
            });
          });
        
        describe("PremierPlatinumEvaluationDocument model", () => {
            test("constructor", () => {
              var obj = new PremierPlatinumEvaluationDocument();
              expect(obj).toBeInstanceOf(PremierPlatinumEvaluationDocument);
            });
          });
        
        describe("PremierProfileDataChangeDates model", () => {
            test("constructor", () => {
              var obj = new PremierProfileDataChangeDates();
              expect(obj).toBeInstanceOf(PremierProfileDataChangeDates);
            });
          });
        
        describe("PremierProfileSdgCode model", () => {
            test("constructor", () => {
              var obj = new PremierProfileSdgCode();
              expect(obj).toBeInstanceOf(PremierProfileSdgCode);
            });
          });
        
        describe("PremierProfitability model", () => {
            test("constructor", () => {
              var obj = new PremierProfitability();
              expect(obj).toBeInstanceOf(PremierProfitability);
            });
          });
        
        describe("PremierProgram model", () => {
            test("constructor", () => {
              var obj = new PremierProgram();
              expect(obj).toBeInstanceOf(PremierProgram);
            });
          });
        
        describe("PremierProgramPlatinumMetric model", () => {
            test("constructor", () => {
              var obj = new PremierProgramPlatinumMetric();
              expect(obj).toBeInstanceOf(PremierProgramPlatinumMetric);
            });
          });
        
        describe("PremierPrograms model", () => {
            test("constructor", () => {
              var obj = new PremierPrograms();
              expect(obj).toBeInstanceOf(PremierPrograms);
            });
          });
        
        describe("PremierResponse model", () => {
            test("constructor", () => {
              var obj = new PremierResponse();
              expect(obj).toBeInstanceOf(PremierResponse);
            });
          });
        
        describe("PremierRevenueComposition model", () => {
            test("constructor", () => {
              var obj = new PremierRevenueComposition();
              expect(obj).toBeInstanceOf(PremierRevenueComposition);
            });
          });
        
        describe("PremierSdg model", () => {
            test("constructor", () => {
              var obj = new PremierSdg();
              expect(obj).toBeInstanceOf(PremierSdg);
            });
          });
        
        describe("PremierSicCode model", () => {
            test("constructor", () => {
              var obj = new PremierSicCode();
              expect(obj).toBeInstanceOf(PremierSicCode);
            });
          });
        
        describe("PremierStaffLevel model", () => {
            test("constructor", () => {
              var obj = new PremierStaffLevel();
              expect(obj).toBeInstanceOf(PremierStaffLevel);
            });
          });
        
        describe("PremierStaffLevelTotals model", () => {
            test("constructor", () => {
              var obj = new PremierStaffLevelTotals();
              expect(obj).toBeInstanceOf(PremierStaffLevelTotals);
            });
          });
        
        describe("PremierSubcategory model", () => {
            test("constructor", () => {
              var obj = new PremierSubcategory();
              expect(obj).toBeInstanceOf(PremierSubcategory);
            });
          });
        
        describe("PremierSummary model", () => {
            test("constructor", () => {
              var obj = new PremierSummary();
              expect(obj).toBeInstanceOf(PremierSummary);
            });
          });
        
        describe("PremierTelephoneNumber model", () => {
            test("constructor", () => {
              var obj = new PremierTelephoneNumber();
              expect(obj).toBeInstanceOf(PremierTelephoneNumber);
            });
          });
        
        describe("PremierVideo model", () => {
            test("constructor", () => {
              var obj = new PremierVideo();
              expect(obj).toBeInstanceOf(PremierVideo);
            });
          });
        
        describe("PremierYear model", () => {
            test("constructor", () => {
              var obj = new PremierYear();
              expect(obj).toBeInstanceOf(PremierYear);
            });
          });
        
        describe("Exception model", () => {
            test("constructor", () => {
              var obj = new Exception();
              expect(obj).toBeInstanceOf(Exception);
            });
          });
        
        describe("Function0 model", () => {
            test("constructor", () => {
              var obj = new Function0();
              expect(obj).toBeInstanceOf(Function0);
            });
          });
        
        describe("Function0Object model", () => {
            test("constructor", () => {
              var obj = new Function0Object();
              expect(obj).toBeInstanceOf(Function0Object);
            });
          });
        
        describe("LongRunningTask model", () => {
            test("constructor", () => {
              var obj = new LongRunningTask();
              expect(obj).toBeInstanceOf(LongRunningTask);
            });
          });
        
        describe("LongRunningTaskObject model", () => {
            test("constructor", () => {
              var obj = new LongRunningTaskObject();
              expect(obj).toBeInstanceOf(LongRunningTaskObject);
            });
          });
        
        describe("StackTraceElement model", () => {
            test("constructor", () => {
              var obj = new StackTraceElement();
              expect(obj).toBeInstanceOf(StackTraceElement);
            });
          });
        
        describe("Throwable model", () => {
            test("constructor", () => {
              var obj = new Throwable();
              expect(obj).toBeInstanceOf(Throwable);
            });
          });
        
        describe("IndexRequest model", () => {
            test("constructor", () => {
              var obj = new IndexRequest();
              expect(obj).toBeInstanceOf(IndexRequest);
            });
          });
        
        describe("NylasSyncRequest model", () => {
            test("constructor", () => {
              var obj = new NylasSyncRequest();
              expect(obj).toBeInstanceOf(NylasSyncRequest);
            });
          });
        
        describe("AnvilPDFAdditionalInfo model", () => {
            test("constructor", () => {
              var obj = new AnvilPDFAdditionalInfo();
              expect(obj).toBeInstanceOf(AnvilPDFAdditionalInfo);
            });
          });
        
        describe("AnvilPDFField model", () => {
            test("constructor", () => {
              var obj = new AnvilPDFField();
              expect(obj).toBeInstanceOf(AnvilPDFField);
            });
          });
        
        describe("Budget model", () => {
            test("constructor", () => {
              var obj = new Budget();
              expect(obj).toBeInstanceOf(Budget);
            });
          });
        
        describe("BudgetAllocation model", () => {
            test("constructor", () => {
              var obj = new BudgetAllocation();
              expect(obj).toBeInstanceOf(BudgetAllocation);
            });
          });
        
        describe("CRMConfiguration model", () => {
            test("constructor", () => {
              var obj = new CRMConfiguration();
              expect(obj).toBeInstanceOf(CRMConfiguration);
            });
          });
        
        describe("CRMConfigurationField model", () => {
            test("constructor", () => {
              var obj = new CRMConfigurationField();
              expect(obj).toBeInstanceOf(CRMConfigurationField);
            });
          });
        
        describe("CRMExternalConfigProperty model", () => {
            test("constructor", () => {
              var obj = new CRMExternalConfigProperty();
              expect(obj).toBeInstanceOf(CRMExternalConfigProperty);
            });
          });
        
        describe("ConfigurationSettings model", () => {
            test("constructor", () => {
              var obj = new ConfigurationSettings();
              expect(obj).toBeInstanceOf(ConfigurationSettings);
            });
          });
        
        describe("CustomEmailTemplate model", () => {
            test("constructor", () => {
              var obj = new CustomEmailTemplate();
              expect(obj).toBeInstanceOf(CustomEmailTemplate);
            });
          });
        
        describe("CustomGrantType model", () => {
            test("constructor", () => {
              var obj = new CustomGrantType();
              expect(obj).toBeInstanceOf(CustomGrantType);
            });
          });
        
        describe("DocumentItem model", () => {
            test("constructor", () => {
              var obj = new DocumentItem();
              expect(obj).toBeInstanceOf(DocumentItem);
            });
          });
        
        describe("ExternalReviewerConfiguration model", () => {
            test("constructor", () => {
              var obj = new ExternalReviewerConfiguration();
              expect(obj).toBeInstanceOf(ExternalReviewerConfiguration);
            });
          });
        
        describe("ExternalReviewerTableConfiguration model", () => {
            test("constructor", () => {
              var obj = new ExternalReviewerTableConfiguration();
              expect(obj).toBeInstanceOf(ExternalReviewerTableConfiguration);
            });
          });
        
        describe("FeatureSet model", () => {
            test("constructor", () => {
              var obj = new FeatureSet();
              expect(obj).toBeInstanceOf(FeatureSet);
            });
          });
        
        describe("FoundationCRMField model", () => {
            test("constructor", () => {
              var obj = new FoundationCRMField();
              expect(obj).toBeInstanceOf(FoundationCRMField);
            });
          });
        
        describe("FoundationMailSettings model", () => {
            test("constructor", () => {
              var obj = new FoundationMailSettings();
              expect(obj).toBeInstanceOf(FoundationMailSettings);
            });
          });
        
        describe("FoundationMetadata model", () => {
            test("constructor", () => {
              var obj = new FoundationMetadata();
              expect(obj).toBeInstanceOf(FoundationMetadata);
            });
          });
        
        describe("FoundationMetadataTag model", () => {
            test("constructor", () => {
              var obj = new FoundationMetadataTag();
              expect(obj).toBeInstanceOf(FoundationMetadataTag);
            });
          });
        
        describe("FoundationQuickbooksSetting model", () => {
            test("constructor", () => {
              var obj = new FoundationQuickbooksSetting();
              expect(obj).toBeInstanceOf(FoundationQuickbooksSetting);
            });
          });
        
        describe("FoundationReviewerUser model", () => {
            test("constructor", () => {
              var obj = new FoundationReviewerUser();
              expect(obj).toBeInstanceOf(FoundationReviewerUser);
            });
          });
        
        describe("FoundationSalesforceConfiguration model", () => {
            test("constructor", () => {
              var obj = new FoundationSalesforceConfiguration();
              expect(obj).toBeInstanceOf(FoundationSalesforceConfiguration);
            });
          });
        
        describe("GrantStage model", () => {
            test("constructor", () => {
              var obj = new GrantStage();
              expect(obj).toBeInstanceOf(GrantStage);
            });
          });
        
        describe("GrantStageWorkflow model", () => {
            test("constructor", () => {
              var obj = new GrantStageWorkflow();
              expect(obj).toBeInstanceOf(GrantStageWorkflow);
            });
          });
        
        describe("GrantTypeConfiguration model", () => {
            test("constructor", () => {
              var obj = new GrantTypeConfiguration();
              expect(obj).toBeInstanceOf(GrantTypeConfiguration);
            });
          });
        
        describe("GranteeProfileUpdate model", () => {
            test("constructor", () => {
              var obj = new GranteeProfileUpdate();
              expect(obj).toBeInstanceOf(GranteeProfileUpdate);
            });
          });
        
        describe("GranteeProfileUpdateConfiguration model", () => {
            test("constructor", () => {
              var obj = new GranteeProfileUpdateConfiguration();
              expect(obj).toBeInstanceOf(GranteeProfileUpdateConfiguration);
            });
          });
        
        describe("MailChimpFoundationConfiguration model", () => {
            test("constructor", () => {
              var obj = new MailChimpFoundationConfiguration();
              expect(obj).toBeInstanceOf(MailChimpFoundationConfiguration);
            });
          });
        
        describe("MetabaseConfiguration model", () => {
            test("constructor", () => {
              var obj = new MetabaseConfiguration();
              expect(obj).toBeInstanceOf(MetabaseConfiguration);
            });
          });
        
        describe("MetabaseDashboardUrl model", () => {
            test("constructor", () => {
              var obj = new MetabaseDashboardUrl();
              expect(obj).toBeInstanceOf(MetabaseDashboardUrl);
            });
          });
        
        describe("Pipeline model", () => {
            test("constructor", () => {
              var obj = new Pipeline();
              expect(obj).toBeInstanceOf(Pipeline);
            });
          });
        
        describe("QBPaymentDestination model", () => {
            test("constructor", () => {
              var obj = new QBPaymentDestination();
              expect(obj).toBeInstanceOf(QBPaymentDestination);
            });
          });
        
        describe("QBPaymentSource model", () => {
            test("constructor", () => {
              var obj = new QBPaymentSource();
              expect(obj).toBeInstanceOf(QBPaymentSource);
            });
          });
        
        describe("QBPaymentSyncSetting model", () => {
            test("constructor", () => {
              var obj = new QBPaymentSyncSetting();
              expect(obj).toBeInstanceOf(QBPaymentSyncSetting);
            });
          });
        
        describe("SalesforceEntityToUpdate model", () => {
            test("constructor", () => {
              var obj = new SalesforceEntityToUpdate();
              expect(obj).toBeInstanceOf(SalesforceEntityToUpdate);
            });
          });
        
        describe("SalesforceSyncRequest model", () => {
            test("constructor", () => {
              var obj = new SalesforceSyncRequest();
              expect(obj).toBeInstanceOf(SalesforceSyncRequest);
            });
          });
        
        describe("SalesforceTokenResponse model", () => {
            test("constructor", () => {
              var obj = new SalesforceTokenResponse();
              expect(obj).toBeInstanceOf(SalesforceTokenResponse);
            });
          });
        
        describe("ScoringCriteria model", () => {
            test("constructor", () => {
              var obj = new ScoringCriteria();
              expect(obj).toBeInstanceOf(ScoringCriteria);
            });
          });
        
        describe("TaskTemplate model", () => {
            test("constructor", () => {
              var obj = new TaskTemplate();
              expect(obj).toBeInstanceOf(TaskTemplate);
            });
          });
        
        describe("TaskTemplateAdditionalInfo model", () => {
            test("constructor", () => {
              var obj = new TaskTemplateAdditionalInfo();
              expect(obj).toBeInstanceOf(TaskTemplateAdditionalInfo);
            });
          });
        
        describe("TemelioSalesforceFieldMapping model", () => {
            test("constructor", () => {
              var obj = new TemelioSalesforceFieldMapping();
              expect(obj).toBeInstanceOf(TemelioSalesforceFieldMapping);
            });
          });
        
        describe("NonprofitIRSUpdateRequest model", () => {
            test("constructor", () => {
              var obj = new NonprofitIRSUpdateRequest();
              expect(obj).toBeInstanceOf(NonprofitIRSUpdateRequest);
            });
          });
        
        describe("NonprofitAdditionalInfo model", () => {
            test("constructor", () => {
              var obj = new NonprofitAdditionalInfo();
              expect(obj).toBeInstanceOf(NonprofitAdditionalInfo);
            });
          });
        
        describe("NonprofitIRSData model", () => {
            test("constructor", () => {
              var obj = new NonprofitIRSData();
              expect(obj).toBeInstanceOf(NonprofitIRSData);
            });
          });
        
        describe("NonprofitMetadata model", () => {
            test("constructor", () => {
              var obj = new NonprofitMetadata();
              expect(obj).toBeInstanceOf(NonprofitMetadata);
            });
          });
        
        describe("PlaidData model", () => {
            test("constructor", () => {
              var obj = new PlaidData();
              expect(obj).toBeInstanceOf(PlaidData);
            });
          });
        
        describe("Nonprofit model", () => {
            test("constructor", () => {
              var obj = new Nonprofit();
              expect(obj).toBeInstanceOf(Nonprofit);
            });
          });
        
        describe("AwardStatistics model", () => {
            test("constructor", () => {
              var obj = new AwardStatistics();
              expect(obj).toBeInstanceOf(AwardStatistics);
            });
          });
        
        describe("BudgetCategoryAllocation model", () => {
            test("constructor", () => {
              var obj = new BudgetCategoryAllocation();
              expect(obj).toBeInstanceOf(BudgetCategoryAllocation);
            });
          });
        
        describe("BudgetCategoryYOYData model", () => {
            test("constructor", () => {
              var obj = new BudgetCategoryYOYData();
              expect(obj).toBeInstanceOf(BudgetCategoryYOYData);
            });
          });
        
        describe("Currency model", () => {
            test("constructor", () => {
              var obj = new Currency();
              expect(obj).toBeInstanceOf(Currency);
            });
          });
        
        describe("CustomGrantTypeAllocation model", () => {
            test("constructor", () => {
              var obj = new CustomGrantTypeAllocation();
              expect(obj).toBeInstanceOf(CustomGrantTypeAllocation);
            });
          });
        
        describe("CustomGrantTypeYOYData model", () => {
            test("constructor", () => {
              var obj = new CustomGrantTypeYOYData();
              expect(obj).toBeInstanceOf(CustomGrantTypeYOYData);
            });
          });
        
        describe("DashboardResponse model", () => {
            test("constructor", () => {
              var obj = new DashboardResponse();
              expect(obj).toBeInstanceOf(DashboardResponse);
            });
          });
        
        describe("FirstFormDetails model", () => {
            test("constructor", () => {
              var obj = new FirstFormDetails();
              expect(obj).toBeInstanceOf(FirstFormDetails);
            });
          });
        
        describe("FiscalRange model", () => {
            test("constructor", () => {
              var obj = new FiscalRange();
              expect(obj).toBeInstanceOf(FiscalRange);
            });
          });
        
        describe("FiscalYearData model", () => {
            test("constructor", () => {
              var obj = new FiscalYearData();
              expect(obj).toBeInstanceOf(FiscalYearData);
            });
          });
        
        describe("FormBuilder model", () => {
            test("constructor", () => {
              var obj = new FormBuilder();
              expect(obj).toBeInstanceOf(FormBuilder);
            });
          });
        
        describe("FoundationTagAllocation model", () => {
            test("constructor", () => {
              var obj = new FoundationTagAllocation();
              expect(obj).toBeInstanceOf(FoundationTagAllocation);
            });
          });
        
        describe("GrantAdditionalInfo model", () => {
            test("constructor", () => {
              var obj = new GrantAdditionalInfo();
              expect(obj).toBeInstanceOf(GrantAdditionalInfo);
            });
          });
        
        describe("GrantAdditionalInfoEntity model", () => {
            test("constructor", () => {
              var obj = new GrantAdditionalInfoEntity();
              expect(obj).toBeInstanceOf(GrantAdditionalInfoEntity);
            });
          });
        
        describe("GrantAmount model", () => {
            test("constructor", () => {
              var obj = new GrantAmount();
              expect(obj).toBeInstanceOf(GrantAmount);
            });
          });
        
        describe("GrantDuration model", () => {
            test("constructor", () => {
              var obj = new GrantDuration();
              expect(obj).toBeInstanceOf(GrantDuration);
            });
          });
        
        describe("GrantEligibility model", () => {
            test("constructor", () => {
              var obj = new GrantEligibility();
              expect(obj).toBeInstanceOf(GrantEligibility);
            });
          });
        
        describe("GrantFormAdditionalInfo model", () => {
            test("constructor", () => {
              var obj = new GrantFormAdditionalInfo();
              expect(obj).toBeInstanceOf(GrantFormAdditionalInfo);
            });
          });
        
        describe("GrantFormProposal model", () => {
            test("constructor", () => {
              var obj = new GrantFormProposal();
              expect(obj).toBeInstanceOf(GrantFormProposal);
            });
          });
        
        describe("GrantPayment model", () => {
            test("constructor", () => {
              var obj = new GrantPayment();
              expect(obj).toBeInstanceOf(GrantPayment);
            });
          });
        
        describe("GrantPaymentSummary model", () => {
            test("constructor", () => {
              var obj = new GrantPaymentSummary();
              expect(obj).toBeInstanceOf(GrantPaymentSummary);
            });
          });
        
        describe("GrantProposalSubmission model", () => {
            test("constructor", () => {
              var obj = new GrantProposalSubmission();
              expect(obj).toBeInstanceOf(GrantProposalSubmission);
            });
          });
        
        describe("GrantRefereeConfig model", () => {
            test("constructor", () => {
              var obj = new GrantRefereeConfig();
              expect(obj).toBeInstanceOf(GrantRefereeConfig);
            });
          });
        
        describe("GrantRefereeInfo model", () => {
            test("constructor", () => {
              var obj = new GrantRefereeInfo();
              expect(obj).toBeInstanceOf(GrantRefereeInfo);
            });
          });
        
        describe("GrantRefereeRequestConfig model", () => {
            test("constructor", () => {
              var obj = new GrantRefereeRequestConfig();
              expect(obj).toBeInstanceOf(GrantRefereeRequestConfig);
            });
          });
        
        describe("GrantRefereeRequestDetail model", () => {
            test("constructor", () => {
              var obj = new GrantRefereeRequestDetail();
              expect(obj).toBeInstanceOf(GrantRefereeRequestDetail);
            });
          });
        
        describe("GrantTypeAllocation model", () => {
            test("constructor", () => {
              var obj = new GrantTypeAllocation();
              expect(obj).toBeInstanceOf(GrantTypeAllocation);
            });
          });
        
        describe("GrantTypeYOYData model", () => {
            test("constructor", () => {
              var obj = new GrantTypeYOYData();
              expect(obj).toBeInstanceOf(GrantTypeYOYData);
            });
          });
        
        describe("MultiFormResponse model", () => {
            test("constructor", () => {
              var obj = new MultiFormResponse();
              expect(obj).toBeInstanceOf(MultiFormResponse);
            });
          });
        
        describe("MultipleFormInfo model", () => {
            test("constructor", () => {
              var obj = new MultipleFormInfo();
              expect(obj).toBeInstanceOf(MultipleFormInfo);
            });
          });
        
        describe("NonprofitAmount model", () => {
            test("constructor", () => {
              var obj = new NonprofitAmount();
              expect(obj).toBeInstanceOf(NonprofitAmount);
            });
          });
        
        describe("PaymentAdditionalInfo model", () => {
            test("constructor", () => {
              var obj = new PaymentAdditionalInfo();
              expect(obj).toBeInstanceOf(PaymentAdditionalInfo);
            });
          });
        
        describe("QBPaymentDetails model", () => {
            test("constructor", () => {
              var obj = new QBPaymentDetails();
              expect(obj).toBeInstanceOf(QBPaymentDetails);
            });
          });
        
        describe("TagYOYData model", () => {
            test("constructor", () => {
              var obj = new TagYOYData();
              expect(obj).toBeInstanceOf(TagYOYData);
            });
          });
        
        describe("TaskTemplateAssignee model", () => {
            test("constructor", () => {
              var obj = new TaskTemplateAssignee();
              expect(obj).toBeInstanceOf(TaskTemplateAssignee);
            });
          });
        
        describe("TipTapAttrs model", () => {
            test("constructor", () => {
              var obj = new TipTapAttrs();
              expect(obj).toBeInstanceOf(TipTapAttrs);
            });
          });
        
        describe("TipTapTextBlock model", () => {
            test("constructor", () => {
              var obj = new TipTapTextBlock();
              expect(obj).toBeInstanceOf(TipTapTextBlock);
            });
          });
        
        describe("YOYData model", () => {
            test("constructor", () => {
              var obj = new YOYData();
              expect(obj).toBeInstanceOf(YOYData);
            });
          });
        
        describe("YearlyData model", () => {
            test("constructor", () => {
              var obj = new YearlyData();
              expect(obj).toBeInstanceOf(YearlyData);
            });
          });
        
        describe("AggregateExecDashboardRequest model", () => {
            test("constructor", () => {
              var obj = new AggregateExecDashboardRequest();
              expect(obj).toBeInstanceOf(AggregateExecDashboardRequest);
            });
          });
        
        describe("AggregateUniversalFoundationSearchResponse model", () => {
            test("constructor", () => {
              var obj = new AggregateUniversalFoundationSearchResponse();
              expect(obj).toBeInstanceOf(AggregateUniversalFoundationSearchResponse);
            });
          });
        
        describe("AggregateUniversalSearchResponse model", () => {
            test("constructor", () => {
              var obj = new AggregateUniversalSearchResponse();
              expect(obj).toBeInstanceOf(AggregateUniversalSearchResponse);
            });
          });
        
        describe("CRMSubmissionDetails model", () => {
            test("constructor", () => {
              var obj = new CRMSubmissionDetails();
              expect(obj).toBeInstanceOf(CRMSubmissionDetails);
            });
          });
        
        describe("FoundationNonprofitMetadata model", () => {
            test("constructor", () => {
              var obj = new FoundationNonprofitMetadata();
              expect(obj).toBeInstanceOf(FoundationNonprofitMetadata);
            });
          });
        
        describe("FoundationSearchResponseEntity model", () => {
            test("constructor", () => {
              var obj = new FoundationSearchResponseEntity();
              expect(obj).toBeInstanceOf(FoundationSearchResponseEntity);
            });
          });
        
        describe("AggregateUniversalSearchQuery model", () => {
            test("constructor", () => {
              var obj = new AggregateUniversalSearchQuery();
              expect(obj).toBeInstanceOf(AggregateUniversalSearchQuery);
            });
          });
        
        describe("AggregateContactResponse model", () => {
            test("constructor", () => {
              var obj = new AggregateContactResponse();
              expect(obj).toBeInstanceOf(AggregateContactResponse);
            });
          });
        
        describe("AggregateFoundationCRMResponse model", () => {
            test("constructor", () => {
              var obj = new AggregateFoundationCRMResponse();
              expect(obj).toBeInstanceOf(AggregateFoundationCRMResponse);
            });
          });
        
        describe("AggregateContactSearchRequest model", () => {
            test("constructor", () => {
              var obj = new AggregateContactSearchRequest();
              expect(obj).toBeInstanceOf(AggregateContactSearchRequest);
            });
          });
        
        describe("AggregateDashboardResponse model", () => {
            test("constructor", () => {
              var obj = new AggregateDashboardResponse();
              expect(obj).toBeInstanceOf(AggregateDashboardResponse);
            });
          });
        
        describe("AggregateFoundationProposalSummary model", () => {
            test("constructor", () => {
              var obj = new AggregateFoundationProposalSummary();
              expect(obj).toBeInstanceOf(AggregateFoundationProposalSummary);
            });
          });
        
        describe("AggregateGrantAnalysis model", () => {
            test("constructor", () => {
              var obj = new AggregateGrantAnalysis();
              expect(obj).toBeInstanceOf(AggregateGrantAnalysis);
            });
          });
        
        describe("AnvilPDFFieldResponse model", () => {
            test("constructor", () => {
              var obj = new AnvilPDFFieldResponse();
              expect(obj).toBeInstanceOf(AnvilPDFFieldResponse);
            });
          });
        
        describe("AnvilPDFFieldResponses model", () => {
            test("constructor", () => {
              var obj = new AnvilPDFFieldResponses();
              expect(obj).toBeInstanceOf(AnvilPDFFieldResponses);
            });
          });
        
        describe("AnvilPaymentDetails model", () => {
            test("constructor", () => {
              var obj = new AnvilPaymentDetails();
              expect(obj).toBeInstanceOf(AnvilPaymentDetails);
            });
          });
        
        describe("DonorActivity model", () => {
            test("constructor", () => {
              var obj = new DonorActivity();
              expect(obj).toBeInstanceOf(DonorActivity);
            });
          });
        
        describe("DonorActivityAdditionalInfo model", () => {
            test("constructor", () => {
              var obj = new DonorActivityAdditionalInfo();
              expect(obj).toBeInstanceOf(DonorActivityAdditionalInfo);
            });
          });
        
        describe("DonorContribution model", () => {
            test("constructor", () => {
              var obj = new DonorContribution();
              expect(obj).toBeInstanceOf(DonorContribution);
            });
          });
        
        describe("DonorContributionComment model", () => {
            test("constructor", () => {
              var obj = new DonorContributionComment();
              expect(obj).toBeInstanceOf(DonorContributionComment);
            });
          });
        
        describe("DonorData model", () => {
            test("constructor", () => {
              var obj = new DonorData();
              expect(obj).toBeInstanceOf(DonorData);
            });
          });
        
        describe("DonorEntity model", () => {
            test("constructor", () => {
              var obj = new DonorEntity();
              expect(obj).toBeInstanceOf(DonorEntity);
            });
          });
        
        describe("DonorRelationship model", () => {
            test("constructor", () => {
              var obj = new DonorRelationship();
              expect(obj).toBeInstanceOf(DonorRelationship);
            });
          });
        
        describe("DonorTag model", () => {
            test("constructor", () => {
              var obj = new DonorTag();
              expect(obj).toBeInstanceOf(DonorTag);
            });
          });
        
        describe("EntityDetails model", () => {
            test("constructor", () => {
              var obj = new EntityDetails();
              expect(obj).toBeInstanceOf(EntityDetails);
            });
          });
        
        describe("FoundationProposalSummary model", () => {
            test("constructor", () => {
              var obj = new FoundationProposalSummary();
              expect(obj).toBeInstanceOf(FoundationProposalSummary);
            });
          });
        
        describe("GrantSubmissionSearchResponse model", () => {
            test("constructor", () => {
              var obj = new GrantSubmissionSearchResponse();
              expect(obj).toBeInstanceOf(GrantSubmissionSearchResponse);
            });
          });
        
        describe("PipelineProposalSummary model", () => {
            test("constructor", () => {
              var obj = new PipelineProposalSummary();
              expect(obj).toBeInstanceOf(PipelineProposalSummary);
            });
          });
        
        describe("ProposalStageResult model", () => {
            test("constructor", () => {
              var obj = new ProposalStageResult();
              expect(obj).toBeInstanceOf(ProposalStageResult);
            });
          });
        
        describe("SignatureOrder model", () => {
            test("constructor", () => {
              var obj = new SignatureOrder();
              expect(obj).toBeInstanceOf(SignatureOrder);
            });
          });
        
        describe("SignatureStatusDetails model", () => {
            test("constructor", () => {
              var obj = new SignatureStatusDetails();
              expect(obj).toBeInstanceOf(SignatureStatusDetails);
            });
          });
        
        describe("TaskAdditionalInfo model", () => {
            test("constructor", () => {
              var obj = new TaskAdditionalInfo();
              expect(obj).toBeInstanceOf(TaskAdditionalInfo);
            });
          });
        
        describe("TaskSourceEntity model", () => {
            test("constructor", () => {
              var obj = new TaskSourceEntity();
              expect(obj).toBeInstanceOf(TaskSourceEntity);
            });
          });
        
        describe("UserDetails model", () => {
            test("constructor", () => {
              var obj = new UserDetails();
              expect(obj).toBeInstanceOf(UserDetails);
            });
          });
        
        describe("AggregateDashboardRequest model", () => {
            test("constructor", () => {
              var obj = new AggregateDashboardRequest();
              expect(obj).toBeInstanceOf(AggregateDashboardRequest);
            });
          });
        
        describe("DataColumn model", () => {
            test("constructor", () => {
              var obj = new DataColumn();
              expect(obj).toBeInstanceOf(DataColumn);
            });
          });
        
        describe("DataRow model", () => {
            test("constructor", () => {
              var obj = new DataRow();
              expect(obj).toBeInstanceOf(DataRow);
            });
          });
        
        describe("DataSearchResponse model", () => {
            test("constructor", () => {
              var obj = new DataSearchResponse();
              expect(obj).toBeInstanceOf(DataSearchResponse);
            });
          });
        
        describe("AggregateDataSearchRequest model", () => {
            test("constructor", () => {
              var obj = new AggregateDataSearchRequest();
              expect(obj).toBeInstanceOf(AggregateDataSearchRequest);
            });
          });
        
        describe("BoardProposalValues model", () => {
            test("constructor", () => {
              var obj = new BoardProposalValues();
              expect(obj).toBeInstanceOf(BoardProposalValues);
            });
          });
        
        describe("DocumentFieldResponse model", () => {
            test("constructor", () => {
              var obj = new DocumentFieldResponse();
              expect(obj).toBeInstanceOf(DocumentFieldResponse);
            });
          });
        
        describe("BoardBook model", () => {
            test("constructor", () => {
              var obj = new BoardBook();
              expect(obj).toBeInstanceOf(BoardBook);
            });
          });
        
        describe("BoardBookSummarySheet model", () => {
            test("constructor", () => {
              var obj = new BoardBookSummarySheet();
              expect(obj).toBeInstanceOf(BoardBookSummarySheet);
            });
          });
        
        describe("BoardGrantProposal model", () => {
            test("constructor", () => {
              var obj = new BoardGrantProposal();
              expect(obj).toBeInstanceOf(BoardGrantProposal);
            });
          });
        
        describe("BoardGrantProposalAdditionalInfo model", () => {
            test("constructor", () => {
              var obj = new BoardGrantProposalAdditionalInfo();
              expect(obj).toBeInstanceOf(BoardGrantProposalAdditionalInfo);
            });
          });
        
        describe("PDFDocumentDisplay model", () => {
            test("constructor", () => {
              var obj = new PDFDocumentDisplay();
              expect(obj).toBeInstanceOf(PDFDocumentDisplay);
            });
          });
        
        describe("BoardProposalSearchResponse model", () => {
            test("constructor", () => {
              var obj = new BoardProposalSearchResponse();
              expect(obj).toBeInstanceOf(BoardProposalSearchResponse);
            });
          });
        
        describe("BoardProposalSearchQuery model", () => {
            test("constructor", () => {
              var obj = new BoardProposalSearchQuery();
              expect(obj).toBeInstanceOf(BoardProposalSearchQuery);
            });
          });
        
        describe("BoardGeneratorRequest model", () => {
            test("constructor", () => {
              var obj = new BoardGeneratorRequest();
              expect(obj).toBeInstanceOf(BoardGeneratorRequest);
            });
          });
        
        describe("AnalyticsField model", () => {
            test("constructor", () => {
              var obj = new AnalyticsField();
              expect(obj).toBeInstanceOf(AnalyticsField);
            });
          });
        
        describe("AnalyticsFieldPaymentResponse model", () => {
            test("constructor", () => {
              var obj = new AnalyticsFieldPaymentResponse();
              expect(obj).toBeInstanceOf(AnalyticsFieldPaymentResponse);
            });
          });
        
        describe("AnalyticsFieldSubmissionInfo model", () => {
            test("constructor", () => {
              var obj = new AnalyticsFieldSubmissionInfo();
              expect(obj).toBeInstanceOf(AnalyticsFieldSubmissionInfo);
            });
          });
        
        describe("AnalyticsFieldValue model", () => {
            test("constructor", () => {
              var obj = new AnalyticsFieldValue();
              expect(obj).toBeInstanceOf(AnalyticsFieldValue);
            });
          });
        
        describe("AnalyticsFieldYOYData model", () => {
            test("constructor", () => {
              var obj = new AnalyticsFieldYOYData();
              expect(obj).toBeInstanceOf(AnalyticsFieldYOYData);
            });
          });
        
        describe("AnalyticsPaymentYOYData model", () => {
            test("constructor", () => {
              var obj = new AnalyticsPaymentYOYData();
              expect(obj).toBeInstanceOf(AnalyticsPaymentYOYData);
            });
          });
        
        describe("AnalyticsResponse model", () => {
            test("constructor", () => {
              var obj = new AnalyticsResponse();
              expect(obj).toBeInstanceOf(AnalyticsResponse);
            });
          });
        
        describe("AnalyticsRequest model", () => {
            test("constructor", () => {
              var obj = new AnalyticsRequest();
              expect(obj).toBeInstanceOf(AnalyticsRequest);
            });
          });
        
        describe("DataSearchQuery model", () => {
            test("constructor", () => {
              var obj = new DataSearchQuery();
              expect(obj).toBeInstanceOf(DataSearchQuery);
            });
          });
        
        describe("DocumentTemplate model", () => {
            test("constructor", () => {
              var obj = new DocumentTemplate();
              expect(obj).toBeInstanceOf(DocumentTemplate);
            });
          });
        
        describe("DocumentTemplateAdditionalInfo model", () => {
            test("constructor", () => {
              var obj = new DocumentTemplateAdditionalInfo();
              expect(obj).toBeInstanceOf(DocumentTemplateAdditionalInfo);
            });
          });
        
        describe("DocusignAdditionalInfo model", () => {
            test("constructor", () => {
              var obj = new DocusignAdditionalInfo();
              expect(obj).toBeInstanceOf(DocusignAdditionalInfo);
            });
          });
        
        describe("DocusignEnvelope model", () => {
            test("constructor", () => {
              var obj = new DocusignEnvelope();
              expect(obj).toBeInstanceOf(DocusignEnvelope);
            });
          });
        
        describe("Envelope model", () => {
            test("constructor", () => {
              var obj = new Envelope();
              expect(obj).toBeInstanceOf(Envelope);
            });
          });
        
        describe("Recipients model", () => {
            test("constructor", () => {
              var obj = new Recipients();
              expect(obj).toBeInstanceOf(Recipients);
            });
          });
        
        describe("Sender model", () => {
            test("constructor", () => {
              var obj = new Sender();
              expect(obj).toBeInstanceOf(Sender);
            });
          });
        
        describe("Signer model", () => {
            test("constructor", () => {
              var obj = new Signer();
              expect(obj).toBeInstanceOf(Signer);
            });
          });
        
        describe("DocusignLoginURL model", () => {
            test("constructor", () => {
              var obj = new DocusignLoginURL();
              expect(obj).toBeInstanceOf(DocusignLoginURL);
            });
          });
        
        describe("DocusignLoginRequest model", () => {
            test("constructor", () => {
              var obj = new DocusignLoginRequest();
              expect(obj).toBeInstanceOf(DocusignLoginRequest);
            });
          });
        
        describe("AccountInfo model", () => {
            test("constructor", () => {
              var obj = new AccountInfo();
              expect(obj).toBeInstanceOf(AccountInfo);
            });
          });
        
        describe("DocusignSenderViewResponse model", () => {
            test("constructor", () => {
              var obj = new DocusignSenderViewResponse();
              expect(obj).toBeInstanceOf(DocusignSenderViewResponse);
            });
          });
        
        describe("EnvelopeRecipient model", () => {
            test("constructor", () => {
              var obj = new EnvelopeRecipient();
              expect(obj).toBeInstanceOf(EnvelopeRecipient);
            });
          });
        
        describe("EnvelopeSendRequest model", () => {
            test("constructor", () => {
              var obj = new EnvelopeSendRequest();
              expect(obj).toBeInstanceOf(EnvelopeSendRequest);
            });
          });
        
        describe("DonorEntityType model", () => {
            test("constructor", () => {
              var obj = new DonorEntityType();
              expect(obj).toBeInstanceOf(DonorEntityType);
            });
          });
        
        describe("DonorRelationshipType model", () => {
            test("constructor", () => {
              var obj = new DonorRelationshipType();
              expect(obj).toBeInstanceOf(DonorRelationshipType);
            });
          });
        
        describe("EligibilityConfiguration model", () => {
            test("constructor", () => {
              var obj = new EligibilityConfiguration();
              expect(obj).toBeInstanceOf(EligibilityConfiguration);
            });
          });
        
        describe("EligibilityEmailTemplate model", () => {
            test("constructor", () => {
              var obj = new EligibilityEmailTemplate();
              expect(obj).toBeInstanceOf(EligibilityEmailTemplate);
            });
          });
        
        describe("EligibilityForm model", () => {
            test("constructor", () => {
              var obj = new EligibilityForm();
              expect(obj).toBeInstanceOf(EligibilityForm);
            });
          });
        
        describe("UniversalForm model", () => {
            test("constructor", () => {
              var obj = new UniversalForm();
              expect(obj).toBeInstanceOf(UniversalForm);
            });
          });
        
        describe("AssignExternalReviewerRequest model", () => {
            test("constructor", () => {
              var obj = new AssignExternalReviewerRequest();
              expect(obj).toBeInstanceOf(AssignExternalReviewerRequest);
            });
          });
        
        describe("ExternalReviewerDashboard model", () => {
            test("constructor", () => {
              var obj = new ExternalReviewerDashboard();
              expect(obj).toBeInstanceOf(ExternalReviewerDashboard);
            });
          });
        
        describe("TaskSubmission model", () => {
            test("constructor", () => {
              var obj = new TaskSubmission();
              expect(obj).toBeInstanceOf(TaskSubmission);
            });
          });
        
        describe("FileMeta model", () => {
            test("constructor", () => {
              var obj = new FileMeta();
              expect(obj).toBeInstanceOf(FileMeta);
            });
          });
        
        describe("FileCopyPair model", () => {
            test("constructor", () => {
              var obj = new FileCopyPair();
              expect(obj).toBeInstanceOf(FileCopyPair);
            });
          });
        
        describe("Folder model", () => {
            test("constructor", () => {
              var obj = new Folder();
              expect(obj).toBeInstanceOf(Folder);
            });
          });
        
        describe("AdditionalFilterInfo model", () => {
            test("constructor", () => {
              var obj = new AdditionalFilterInfo();
              expect(obj).toBeInstanceOf(AdditionalFilterInfo);
            });
          });
        
        describe("FilterView model", () => {
            test("constructor", () => {
              var obj = new FilterView();
              expect(obj).toBeInstanceOf(FilterView);
            });
          });
        
        describe("FilterViewCondition model", () => {
            test("constructor", () => {
              var obj = new FilterViewCondition();
              expect(obj).toBeInstanceOf(FilterViewCondition);
            });
          });
        
        describe("FilterViewFilter model", () => {
            test("constructor", () => {
              var obj = new FilterViewFilter();
              expect(obj).toBeInstanceOf(FilterViewFilter);
            });
          });
        
        describe("FilterViewRename model", () => {
            test("constructor", () => {
              var obj = new FilterViewRename();
              expect(obj).toBeInstanceOf(FilterViewRename);
            });
          });
        
        describe("FilterViewSettings model", () => {
            test("constructor", () => {
              var obj = new FilterViewSettings();
              expect(obj).toBeInstanceOf(FilterViewSettings);
            });
          });
        
        describe("FilterViewSorting model", () => {
            test("constructor", () => {
              var obj = new FilterViewSorting();
              expect(obj).toBeInstanceOf(FilterViewSorting);
            });
          });
        
        describe("FilterViewVisibility model", () => {
            test("constructor", () => {
              var obj = new FilterViewVisibility();
              expect(obj).toBeInstanceOf(FilterViewVisibility);
            });
          });
        
        describe("NonprofitGrantPair model", () => {
            test("constructor", () => {
              var obj = new NonprofitGrantPair();
              expect(obj).toBeInstanceOf(NonprofitGrantPair);
            });
          });
        
        describe("NonprofitGrantSubmission model", () => {
            test("constructor", () => {
              var obj = new NonprofitGrantSubmission();
              expect(obj).toBeInstanceOf(NonprofitGrantSubmission);
            });
          });
        
        describe("GrantEligibilityResponse model", () => {
            test("constructor", () => {
              var obj = new GrantEligibilityResponse();
              expect(obj).toBeInstanceOf(GrantEligibilityResponse);
            });
          });
        
        describe("EligibilityFormResponses model", () => {
            test("constructor", () => {
              var obj = new EligibilityFormResponses();
              expect(obj).toBeInstanceOf(EligibilityFormResponses);
            });
          });
        
        describe("FoundationPaymentField model", () => {
            test("constructor", () => {
              var obj = new FoundationPaymentField();
              expect(obj).toBeInstanceOf(FoundationPaymentField);
            });
          });
        
        describe("PaymentSearchResponse model", () => {
            test("constructor", () => {
              var obj = new PaymentSearchResponse();
              expect(obj).toBeInstanceOf(PaymentSearchResponse);
            });
          });
        
        describe("PaymentSearchQuery model", () => {
            test("constructor", () => {
              var obj = new PaymentSearchQuery();
              expect(obj).toBeInstanceOf(PaymentSearchQuery);
            });
          });
        
        describe("BankInfoDownloadRequest model", () => {
            test("constructor", () => {
              var obj = new BankInfoDownloadRequest();
              expect(obj).toBeInstanceOf(BankInfoDownloadRequest);
            });
          });
        
        describe("CRMSearchResponse model", () => {
            test("constructor", () => {
              var obj = new CRMSearchResponse();
              expect(obj).toBeInstanceOf(CRMSearchResponse);
            });
          });
        
        describe("ContactsResponse model", () => {
            test("constructor", () => {
              var obj = new ContactsResponse();
              expect(obj).toBeInstanceOf(ContactsResponse);
            });
          });
        
        describe("CRMSearchQuery model", () => {
            test("constructor", () => {
              var obj = new CRMSearchQuery();
              expect(obj).toBeInstanceOf(CRMSearchQuery);
            });
          });
        
        describe("FilterOption model", () => {
            test("constructor", () => {
              var obj = new FilterOption();
              expect(obj).toBeInstanceOf(FilterOption);
            });
          });
        
        describe("SortOption model", () => {
            test("constructor", () => {
              var obj = new SortOption();
              expect(obj).toBeInstanceOf(SortOption);
            });
          });
        
        describe("ContactsRequest model", () => {
            test("constructor", () => {
              var obj = new ContactsRequest();
              expect(obj).toBeInstanceOf(ContactsRequest);
            });
          });
        
        describe("LandingPage model", () => {
            test("constructor", () => {
              var obj = new LandingPage();
              expect(obj).toBeInstanceOf(LandingPage);
            });
          });
        
        describe("GetFoundationNonprofitUsersResponse model", () => {
            test("constructor", () => {
              var obj = new GetFoundationNonprofitUsersResponse();
              expect(obj).toBeInstanceOf(GetFoundationNonprofitUsersResponse);
            });
          });
        
        describe("FoundationProposals model", () => {
            test("constructor", () => {
              var obj = new FoundationProposals();
              expect(obj).toBeInstanceOf(FoundationProposals);
            });
          });
        
        describe("FilteredProposalCell model", () => {
            test("constructor", () => {
              var obj = new FilteredProposalCell();
              expect(obj).toBeInstanceOf(FilteredProposalCell);
            });
          });
        
        describe("FilteredProposalColumn model", () => {
            test("constructor", () => {
              var obj = new FilteredProposalColumn();
              expect(obj).toBeInstanceOf(FilteredProposalColumn);
            });
          });
        
        describe("FilteredProposalRow model", () => {
            test("constructor", () => {
              var obj = new FilteredProposalRow();
              expect(obj).toBeInstanceOf(FilteredProposalRow);
            });
          });
        
        describe("GetFilteredProposalsResponse model", () => {
            test("constructor", () => {
              var obj = new GetFilteredProposalsResponse();
              expect(obj).toBeInstanceOf(GetFilteredProposalsResponse);
            });
          });
        
        describe("GetFilteredBulkProposalsResponse model", () => {
            test("constructor", () => {
              var obj = new GetFilteredBulkProposalsResponse();
              expect(obj).toBeInstanceOf(GetFilteredBulkProposalsResponse);
            });
          });
        
        describe("BulkFilterProposalsRequest model", () => {
            test("constructor", () => {
              var obj = new BulkFilterProposalsRequest();
              expect(obj).toBeInstanceOf(BulkFilterProposalsRequest);
            });
          });
        
        describe("CreateTaskReviewerRequest model", () => {
            test("constructor", () => {
              var obj = new CreateTaskReviewerRequest();
              expect(obj).toBeInstanceOf(CreateTaskReviewerRequest);
            });
          });
        
        describe("PostmarkMessage model", () => {
            test("constructor", () => {
              var obj = new PostmarkMessage();
              expect(obj).toBeInstanceOf(PostmarkMessage);
            });
          });
        
        describe("PostmarkMessageEvent model", () => {
            test("constructor", () => {
              var obj = new PostmarkMessageEvent();
              expect(obj).toBeInstanceOf(PostmarkMessageEvent);
            });
          });
        
        describe("PostmarkMessageEventDetails model", () => {
            test("constructor", () => {
              var obj = new PostmarkMessageEventDetails();
              expect(obj).toBeInstanceOf(PostmarkMessageEventDetails);
            });
          });
        
        describe("PostmarkRecipient model", () => {
            test("constructor", () => {
              var obj = new PostmarkRecipient();
              expect(obj).toBeInstanceOf(PostmarkRecipient);
            });
          });
        
        describe("FoundationNonprofitActivity model", () => {
            test("constructor", () => {
              var obj = new FoundationNonprofitActivity();
              expect(obj).toBeInstanceOf(FoundationNonprofitActivity);
            });
          });
        
        describe("FoundationNotes model", () => {
            test("constructor", () => {
              var obj = new FoundationNotes();
              expect(obj).toBeInstanceOf(FoundationNotes);
            });
          });
        
        describe("GrantSubmissionStatusChange model", () => {
            test("constructor", () => {
              var obj = new GrantSubmissionStatusChange();
              expect(obj).toBeInstanceOf(GrantSubmissionStatusChange);
            });
          });
        
        describe("NylasFolder model", () => {
            test("constructor", () => {
              var obj = new NylasFolder();
              expect(obj).toBeInstanceOf(NylasFolder);
            });
          });
        
        describe("NylasLabel model", () => {
            test("constructor", () => {
              var obj = new NylasLabel();
              expect(obj).toBeInstanceOf(NylasLabel);
            });
          });
        
        describe("NylasParticipant model", () => {
            test("constructor", () => {
              var obj = new NylasParticipant();
              expect(obj).toBeInstanceOf(NylasParticipant);
            });
          });
        
        describe("NylasThread model", () => {
            test("constructor", () => {
              var obj = new NylasThread();
              expect(obj).toBeInstanceOf(NylasThread);
            });
          });
        
        describe("NylasThreadGroup model", () => {
            test("constructor", () => {
              var obj = new NylasThreadGroup();
              expect(obj).toBeInstanceOf(NylasThreadGroup);
            });
          });
        
        describe("StatusChangeData model", () => {
            test("constructor", () => {
              var obj = new StatusChangeData();
              expect(obj).toBeInstanceOf(StatusChangeData);
            });
          });
        
        describe("FoundationNonprofitPaymentSummary model", () => {
            test("constructor", () => {
              var obj = new FoundationNonprofitPaymentSummary();
              expect(obj).toBeInstanceOf(FoundationNonprofitPaymentSummary);
            });
          });
        
        describe("NonprofitMergeRequest model", () => {
            test("constructor", () => {
              var obj = new NonprofitMergeRequest();
              expect(obj).toBeInstanceOf(NonprofitMergeRequest);
            });
          });
        
        describe("PostmarkOutboundSearchResponse model", () => {
            test("constructor", () => {
              var obj = new PostmarkOutboundSearchResponse();
              expect(obj).toBeInstanceOf(PostmarkOutboundSearchResponse);
            });
          });
        
        describe("FoundationNonprofitGrantSummary model", () => {
            test("constructor", () => {
              var obj = new FoundationNonprofitGrantSummary();
              expect(obj).toBeInstanceOf(FoundationNonprofitGrantSummary);
            });
          });
        
        describe("NumbersACH model", () => {
            test("constructor", () => {
              var obj = new NumbersACH("test","test","test","test");
              expect(obj).toBeInstanceOf(NumbersACH);
            });
          });
        
        describe("AccountBalance model", () => {
            test("constructor", () => {
              var obj = new AccountBalance(1,1,1,"test","test");
              expect(obj).toBeInstanceOf(AccountBalance);
            });
          });
        
        describe("AccountBase model", () => {
            test("constructor", () => {
              var obj = new AccountBase("test",new AccountBalance(1,1,1,"test","test"),"test","test","test","INVESTMENT","_401A");
              expect(obj).toBeInstanceOf(AccountBase);
            });
          });
        
        describe("AuthMetadata model", () => {
            test("constructor", () => {
              var obj = new AuthMetadata(new AuthSupportedMethods(true,true,true));
              expect(obj).toBeInstanceOf(AuthMetadata);
            });
          });
        
        describe("AuthSupportedMethods model", () => {
            test("constructor", () => {
              var obj = new AuthSupportedMethods(true,true,true);
              expect(obj).toBeInstanceOf(AuthSupportedMethods);
            });
          });
        
        describe("BankAccountDetail model", () => {
            test("constructor", () => {
              var obj = new BankAccountDetail();
              expect(obj).toBeInstanceOf(BankAccountDetail);
            });
          });
        
        describe("HealthIncident model", () => {
            test("constructor", () => {
              var obj = new HealthIncident("test","test",[]);
              expect(obj).toBeInstanceOf(HealthIncident);
            });
          });
        
        describe("IncidentUpdate model", () => {
            test("constructor", () => {
              var obj = new IncidentUpdate();
              expect(obj).toBeInstanceOf(IncidentUpdate);
            });
          });
        
        describe("Institution model", () => {
            test("constructor", () => {
              var obj = new Institution("test","test",[],[],[],true);
              expect(obj).toBeInstanceOf(Institution);
            });
          });
        
        describe("InstitutionStatus model", () => {
            test("constructor", () => {
              var obj = new InstitutionStatus();
              expect(obj).toBeInstanceOf(InstitutionStatus);
            });
          });
        
        describe("PaymentInitiationMetadata model", () => {
            test("constructor", () => {
              var obj = new PaymentInitiationMetadata(true,true,{},true,new PaymentInitiationStandingOrderMetadata(true,true,[]));
              expect(obj).toBeInstanceOf(PaymentInitiationMetadata);
            });
          });
        
        describe("PaymentInitiationStandingOrderMetadata model", () => {
            test("constructor", () => {
              var obj = new PaymentInitiationStandingOrderMetadata(true,true,[]);
              expect(obj).toBeInstanceOf(PaymentInitiationStandingOrderMetadata);
            });
          });
        
        describe("ProductStatus model", () => {
            test("constructor", () => {
              var obj = new ProductStatus("HEALTHY","test",new ProductStatusBreakdown(1,1,1));
              expect(obj).toBeInstanceOf(ProductStatus);
            });
          });
        
        describe("ProductStatusBreakdown model", () => {
            test("constructor", () => {
              var obj = new ProductStatusBreakdown(1,1,1);
              expect(obj).toBeInstanceOf(ProductStatusBreakdown);
            });
          });
        
        describe("BulkNonprofitUserUpdate model", () => {
            test("constructor", () => {
              var obj = new BulkNonprofitUserUpdate();
              expect(obj).toBeInstanceOf(BulkNonprofitUserUpdate);
            });
          });
        
        describe("AccountBasedExpenseLineDetail model", () => {
            test("constructor", () => {
              var obj = new AccountBasedExpenseLineDetail();
              expect(obj).toBeInstanceOf(AccountBasedExpenseLineDetail);
            });
          });
        
        describe("AttachableRef model", () => {
            test("constructor", () => {
              var obj = new AttachableRef();
              expect(obj).toBeInstanceOf(AttachableRef);
            });
          });
        
        describe("Bill model", () => {
            test("constructor", () => {
              var obj = new Bill();
              expect(obj).toBeInstanceOf(Bill);
            });
          });
        
        describe("ContactInfo model", () => {
            test("constructor", () => {
              var obj = new ContactInfo();
              expect(obj).toBeInstanceOf(ContactInfo);
            });
          });
        
        describe("CustomField model", () => {
            test("constructor", () => {
              var obj = new CustomField("STRING_TYPE");
              expect(obj).toBeInstanceOf(CustomField);
            });
          });
        
        describe("DepositLineDetail model", () => {
            test("constructor", () => {
              var obj = new DepositLineDetail();
              expect(obj).toBeInstanceOf(DepositLineDetail);
            });
          });
        
        describe("DescriptionLineDetail model", () => {
            test("constructor", () => {
              var obj = new DescriptionLineDetail();
              expect(obj).toBeInstanceOf(DescriptionLineDetail);
            });
          });
        
        describe("DiscountLineDetail model", () => {
            test("constructor", () => {
              var obj = new DiscountLineDetail();
              expect(obj).toBeInstanceOf(DiscountLineDetail);
            });
          });
        
        describe("DiscountOverride model", () => {
            test("constructor", () => {
              var obj = new DiscountOverride();
              expect(obj).toBeInstanceOf(DiscountOverride);
            });
          });
        
        describe("EmailAddress model", () => {
            test("constructor", () => {
              var obj = new EmailAddress();
              expect(obj).toBeInstanceOf(EmailAddress);
            });
          });
        
        describe("EntityTypeRef model", () => {
            test("constructor", () => {
              var obj = new EntityTypeRef();
              expect(obj).toBeInstanceOf(EntityTypeRef);
            });
          });
        
        describe("GenericContactType model", () => {
            test("constructor", () => {
              var obj = new GenericContactType();
              expect(obj).toBeInstanceOf(GenericContactType);
            });
          });
        
        describe("GroupLineDetail model", () => {
            test("constructor", () => {
              var obj = new GroupLineDetail(new ReferenceType());
              expect(obj).toBeInstanceOf(GroupLineDetail);
            });
          });
        
        describe("IntuitAnyType model", () => {
            test("constructor", () => {
              var obj = new IntuitAnyType();
              expect(obj).toBeInstanceOf(IntuitAnyType);
            });
          });
        
        describe("ItemAdjustmentLineDetail model", () => {
            test("constructor", () => {
              var obj = new ItemAdjustmentLineDetail(new ReferenceType());
              expect(obj).toBeInstanceOf(ItemAdjustmentLineDetail);
            });
          });
        
        describe("ItemBasedExpenseLineDetail model", () => {
            test("constructor", () => {
              var obj = new ItemBasedExpenseLineDetail();
              expect(obj).toBeInstanceOf(ItemBasedExpenseLineDetail);
            });
          });
        
        describe("ItemReceiptLineDetail model", () => {
            test("constructor", () => {
              var obj = new ItemReceiptLineDetail();
              expect(obj).toBeInstanceOf(ItemReceiptLineDetail);
            });
          });
        
        describe("JournalEntryLineDetail model", () => {
            test("constructor", () => {
              var obj = new JournalEntryLineDetail();
              expect(obj).toBeInstanceOf(JournalEntryLineDetail);
            });
          });
        
        describe("Line model", () => {
            test("constructor", () => {
              var obj = new Line();
              expect(obj).toBeInstanceOf(Line);
            });
          });
        
        describe("LinkedTxn model", () => {
            test("constructor", () => {
              var obj = new LinkedTxn();
              expect(obj).toBeInstanceOf(LinkedTxn);
            });
          });
        
        describe("MarkupInfo model", () => {
            test("constructor", () => {
              var obj = new MarkupInfo();
              expect(obj).toBeInstanceOf(MarkupInfo);
            });
          });
        
        describe("ModificationMetaData model", () => {
            test("constructor", () => {
              var obj = new ModificationMetaData();
              expect(obj).toBeInstanceOf(ModificationMetaData);
            });
          });
        
        describe("PaymentLineDetail model", () => {
            test("constructor", () => {
              var obj = new PaymentLineDetail(new ReferenceType());
              expect(obj).toBeInstanceOf(PaymentLineDetail);
            });
          });
        
        describe("PhysicalAddress model", () => {
            test("constructor", () => {
              var obj = new PhysicalAddress();
              expect(obj).toBeInstanceOf(PhysicalAddress);
            });
          });
        
        describe("PurchaseOrderItemLineDetail model", () => {
            test("constructor", () => {
              var obj = new PurchaseOrderItemLineDetail();
              expect(obj).toBeInstanceOf(PurchaseOrderItemLineDetail);
            });
          });
        
        describe("QBSearchResponse model", () => {
            test("constructor", () => {
              var obj = new QBSearchResponse();
              expect(obj).toBeInstanceOf(QBSearchResponse);
            });
          });
        
        describe("QBSearchResponseBill model", () => {
            test("constructor", () => {
              var obj = new QBSearchResponseBill();
              expect(obj).toBeInstanceOf(QBSearchResponseBill);
            });
          });
        
        describe("QuickbooksNonprofitDetails model", () => {
            test("constructor", () => {
              var obj = new QuickbooksNonprofitDetails();
              expect(obj).toBeInstanceOf(QuickbooksNonprofitDetails);
            });
          });
        
        describe("RecurringInfo model", () => {
            test("constructor", () => {
              var obj = new RecurringInfo();
              expect(obj).toBeInstanceOf(RecurringInfo);
            });
          });
        
        describe("RecurringScheduleInfo model", () => {
            test("constructor", () => {
              var obj = new RecurringScheduleInfo();
              expect(obj).toBeInstanceOf(RecurringScheduleInfo);
            });
          });
        
        describe("ReferenceType model", () => {
            test("constructor", () => {
              var obj = new ReferenceType();
              expect(obj).toBeInstanceOf(ReferenceType);
            });
          });
        
        describe("ReimburseLineDetail model", () => {
            test("constructor", () => {
              var obj = new ReimburseLineDetail();
              expect(obj).toBeInstanceOf(ReimburseLineDetail);
            });
          });
        
        describe("SalesItemLineDetail model", () => {
            test("constructor", () => {
              var obj = new SalesItemLineDetail();
              expect(obj).toBeInstanceOf(SalesItemLineDetail);
            });
          });
        
        describe("SalesOrderItemLineDetail model", () => {
            test("constructor", () => {
              var obj = new SalesOrderItemLineDetail();
              expect(obj).toBeInstanceOf(SalesOrderItemLineDetail);
            });
          });
        
        describe("SubTotalLineDetail model", () => {
            test("constructor", () => {
              var obj = new SubTotalLineDetail();
              expect(obj).toBeInstanceOf(SubTotalLineDetail);
            });
          });
        
        describe("TDSLineDetail model", () => {
            test("constructor", () => {
              var obj = new TDSLineDetail();
              expect(obj).toBeInstanceOf(TDSLineDetail);
            });
          });
        
        describe("Tag model", () => {
            test("constructor", () => {
              var obj = new Tag();
              expect(obj).toBeInstanceOf(Tag);
            });
          });
        
        describe("TaxLineDetail model", () => {
            test("constructor", () => {
              var obj = new TaxLineDetail();
              expect(obj).toBeInstanceOf(TaxLineDetail);
            });
          });
        
        describe("TelephoneNumber model", () => {
            test("constructor", () => {
              var obj = new TelephoneNumber();
              expect(obj).toBeInstanceOf(TelephoneNumber);
            });
          });
        
        describe("TxnApprovalInfo model", () => {
            test("constructor", () => {
              var obj = new TxnApprovalInfo();
              expect(obj).toBeInstanceOf(TxnApprovalInfo);
            });
          });
        
        describe("TxnTaxDetail model", () => {
            test("constructor", () => {
              var obj = new TxnTaxDetail();
              expect(obj).toBeInstanceOf(TxnTaxDetail);
            });
          });
        
        describe("UOMRef model", () => {
            test("constructor", () => {
              var obj = new UOMRef("test");
              expect(obj).toBeInstanceOf(UOMRef);
            });
          });
        
        describe("Vendor model", () => {
            test("constructor", () => {
              var obj = new Vendor();
              expect(obj).toBeInstanceOf(Vendor);
            });
          });
        
        describe("VendorBankAccountDetail model", () => {
            test("constructor", () => {
              var obj = new VendorBankAccountDetail();
              expect(obj).toBeInstanceOf(VendorBankAccountDetail);
            });
          });
        
        describe("WebSiteAddress model", () => {
            test("constructor", () => {
              var obj = new WebSiteAddress();
              expect(obj).toBeInstanceOf(WebSiteAddress);
            });
          });
        
        describe("HTMLRequest model", () => {
            test("constructor", () => {
              var obj = new HTMLRequest();
              expect(obj).toBeInstanceOf(HTMLRequest);
            });
          });
        
        describe("SubmissionRequest model", () => {
            test("constructor", () => {
              var obj = new SubmissionRequest();
              expect(obj).toBeInstanceOf(SubmissionRequest);
            });
          });
        
        describe("GrantTemplate model", () => {
            test("constructor", () => {
              var obj = new GrantTemplate();
              expect(obj).toBeInstanceOf(GrantTemplate);
            });
          });
        
        describe("BulkActionRequest model", () => {
            test("constructor", () => {
              var obj = new BulkActionRequest();
              expect(obj).toBeInstanceOf(BulkActionRequest);
            });
          });
        
        describe("BulkCreatePaymentRequest model", () => {
            test("constructor", () => {
              var obj = new BulkCreatePaymentRequest();
              expect(obj).toBeInstanceOf(BulkCreatePaymentRequest);
            });
          });
        
        describe("BulkCreateReminderRequest model", () => {
            test("constructor", () => {
              var obj = new BulkCreateReminderRequest();
              expect(obj).toBeInstanceOf(BulkCreateReminderRequest);
            });
          });
        
        describe("BulkCreateReportRequest model", () => {
            test("constructor", () => {
              var obj = new BulkCreateReportRequest();
              expect(obj).toBeInstanceOf(BulkCreateReportRequest);
            });
          });
        
        describe("SubmissionGranteePair model", () => {
            test("constructor", () => {
              var obj = new SubmissionGranteePair();
              expect(obj).toBeInstanceOf(SubmissionGranteePair);
            });
          });
        
        describe("GrantProposalSubmissionReminder model", () => {
            test("constructor", () => {
              var obj = new GrantProposalSubmissionReminder();
              expect(obj).toBeInstanceOf(GrantProposalSubmissionReminder);
            });
          });
        
        describe("GrantProposalSubmissionDeltaResponse model", () => {
            test("constructor", () => {
              var obj = new GrantProposalSubmissionDeltaResponse();
              expect(obj).toBeInstanceOf(GrantProposalSubmissionDeltaResponse);
            });
          });
        
        describe("GrantSubmissionChange model", () => {
            test("constructor", () => {
              var obj = new GrantSubmissionChange();
              expect(obj).toBeInstanceOf(GrantSubmissionChange);
            });
          });
        
        describe("SubmissionTasks model", () => {
            test("constructor", () => {
              var obj = new SubmissionTasks();
              expect(obj).toBeInstanceOf(SubmissionTasks);
            });
          });
        
        describe("ManualGrantLog model", () => {
            test("constructor", () => {
              var obj = new ManualGrantLog();
              expect(obj).toBeInstanceOf(ManualGrantLog);
            });
          });
        
        describe("SubmissionComment model", () => {
            test("constructor", () => {
              var obj = new SubmissionComment();
              expect(obj).toBeInstanceOf(SubmissionComment);
            });
          });
        
        describe("BulkDownloadRequest model", () => {
            test("constructor", () => {
              var obj = new BulkDownloadRequest();
              expect(obj).toBeInstanceOf(BulkDownloadRequest);
            });
          });
        
        describe("GrantSubmissionSearchQuery model", () => {
            test("constructor", () => {
              var obj = new GrantSubmissionSearchQuery();
              expect(obj).toBeInstanceOf(GrantSubmissionSearchQuery);
            });
          });
        
        describe("ReviewEntity model", () => {
            test("constructor", () => {
              var obj = new ReviewEntity();
              expect(obj).toBeInstanceOf(ReviewEntity);
            });
          });
        
        describe("ReviewScores model", () => {
            test("constructor", () => {
              var obj = new ReviewScores();
              expect(obj).toBeInstanceOf(ReviewScores);
            });
          });
        
        describe("UserReviewResponse model", () => {
            test("constructor", () => {
              var obj = new UserReviewResponse();
              expect(obj).toBeInstanceOf(UserReviewResponse);
            });
          });
        
        describe("EntitySuggestionResponse model", () => {
            test("constructor", () => {
              var obj = new EntitySuggestionResponse();
              expect(obj).toBeInstanceOf(EntitySuggestionResponse);
            });
          });
        
        describe("ResponseEntitySuggestion model", () => {
            test("constructor", () => {
              var obj = new ResponseEntitySuggestion();
              expect(obj).toBeInstanceOf(ResponseEntitySuggestion);
            });
          });
        
        describe("SubmissionSuggestionResponses model", () => {
            test("constructor", () => {
              var obj = new SubmissionSuggestionResponses();
              expect(obj).toBeInstanceOf(SubmissionSuggestionResponses);
            });
          });
        
        describe("SuggestionResponseSource model", () => {
            test("constructor", () => {
              var obj = new SuggestionResponseSource();
              expect(obj).toBeInstanceOf(SuggestionResponseSource);
            });
          });
        
        describe("QuestionAnswerPair model", () => {
            test("constructor", () => {
              var obj = new QuestionAnswerPair();
              expect(obj).toBeInstanceOf(QuestionAnswerPair);
            });
          });
        
        describe("SuggestedResponsesRequest model", () => {
            test("constructor", () => {
              var obj = new SuggestedResponsesRequest();
              expect(obj).toBeInstanceOf(SuggestedResponsesRequest);
            });
          });
        
        describe("NonprofitGrantRefereeStatus model", () => {
            test("constructor", () => {
              var obj = new NonprofitGrantRefereeStatus();
              expect(obj).toBeInstanceOf(NonprofitGrantRefereeStatus);
            });
          });
        
        describe("MailChimpAuthUrl model", () => {
            test("constructor", () => {
              var obj = new MailChimpAuthUrl();
              expect(obj).toBeInstanceOf(MailChimpAuthUrl);
            });
          });
        
        describe("MailChimpAddress model", () => {
            test("constructor", () => {
              var obj = new MailChimpAddress();
              expect(obj).toBeInstanceOf(MailChimpAddress);
            });
          });
        
        describe("MailChimpCampaign model", () => {
            test("constructor", () => {
              var obj = new MailChimpCampaign();
              expect(obj).toBeInstanceOf(MailChimpCampaign);
            });
          });
        
        describe("MailChimpList model", () => {
            test("constructor", () => {
              var obj = new MailChimpList();
              expect(obj).toBeInstanceOf(MailChimpList);
            });
          });
        
        describe("NonprofitCreateRequest model", () => {
            test("constructor", () => {
              var obj = new NonprofitCreateRequest();
              expect(obj).toBeInstanceOf(NonprofitCreateRequest);
            });
          });
        
        describe("Notification model", () => {
            test("constructor", () => {
              var obj = new Notification();
              expect(obj).toBeInstanceOf(Notification);
            });
          });
        
        describe("NotificationContent model", () => {
            test("constructor", () => {
              var obj = new NotificationContent();
              expect(obj).toBeInstanceOf(NotificationContent);
            });
          });
        
        describe("NotificationResponse model", () => {
            test("constructor", () => {
              var obj = new NotificationResponse();
              expect(obj).toBeInstanceOf(NotificationResponse);
            });
          });
        
        describe("NotificationUser model", () => {
            test("constructor", () => {
              var obj = new NotificationUser();
              expect(obj).toBeInstanceOf(NotificationUser);
            });
          });
        
        describe("NotificationQuery model", () => {
            test("constructor", () => {
              var obj = new NotificationQuery();
              expect(obj).toBeInstanceOf(NotificationQuery);
            });
          });
        
        describe("NylasFile model", () => {
            test("constructor", () => {
              var obj = new NylasFile();
              expect(obj).toBeInstanceOf(NylasFile);
            });
          });
        
        describe("NylasMessage model", () => {
            test("constructor", () => {
              var obj = new NylasMessage();
              expect(obj).toBeInstanceOf(NylasMessage);
            });
          });
        
        describe("NylasFileRequest model", () => {
            test("constructor", () => {
              var obj = new NylasFileRequest();
              expect(obj).toBeInstanceOf(NylasFileRequest);
            });
          });
        
        describe("NylasLoginURL model", () => {
            test("constructor", () => {
              var obj = new NylasLoginURL();
              expect(obj).toBeInstanceOf(NylasLoginURL);
            });
          });
        
        describe("PlaidLinkTokenResponse model", () => {
            test("constructor", () => {
              var obj = new PlaidLinkTokenResponse();
              expect(obj).toBeInstanceOf(PlaidLinkTokenResponse);
            });
          });
        
        describe("PlaidTokenExchangeResponse model", () => {
            test("constructor", () => {
              var obj = new PlaidTokenExchangeResponse();
              expect(obj).toBeInstanceOf(PlaidTokenExchangeResponse);
            });
          });
        
        describe("PlaidTokenExchangeRequest model", () => {
            test("constructor", () => {
              var obj = new PlaidTokenExchangeRequest();
              expect(obj).toBeInstanceOf(PlaidTokenExchangeRequest);
            });
          });
        
        describe("Account model", () => {
            test("constructor", () => {
              var obj = new Account();
              expect(obj).toBeInstanceOf(Account);
            });
          });
        
        describe("QBSearchResponseAccount model", () => {
            test("constructor", () => {
              var obj = new QBSearchResponseAccount();
              expect(obj).toBeInstanceOf(QBSearchResponseAccount);
            });
          });
        
        describe("QBBillSearchRequest model", () => {
            test("constructor", () => {
              var obj = new QBBillSearchRequest();
              expect(obj).toBeInstanceOf(QBBillSearchRequest);
            });
          });
        
        describe("QBSearchResponseVendor model", () => {
            test("constructor", () => {
              var obj = new QBSearchResponseVendor();
              expect(obj).toBeInstanceOf(QBSearchResponseVendor);
            });
          });
        
        describe("QBVendorSearchRequest model", () => {
            test("constructor", () => {
              var obj = new QBVendorSearchRequest();
              expect(obj).toBeInstanceOf(QBVendorSearchRequest);
            });
          });
        
        describe("QuickbooksLoginURL model", () => {
            test("constructor", () => {
              var obj = new QuickbooksLoginURL();
              expect(obj).toBeInstanceOf(QuickbooksLoginURL);
            });
          });
        
        describe("QuickbooksLoginRequest model", () => {
            test("constructor", () => {
              var obj = new QuickbooksLoginRequest();
              expect(obj).toBeInstanceOf(QuickbooksLoginRequest);
            });
          });
        
        describe("Report model", () => {
            test("constructor", () => {
              var obj = new Report();
              expect(obj).toBeInstanceOf(Report);
            });
          });
        
        describe("ReportSubmission model", () => {
            test("constructor", () => {
              var obj = new ReportSubmission();
              expect(obj).toBeInstanceOf(ReportSubmission);
            });
          });
        
        describe("SubmissionEntity model", () => {
            test("constructor", () => {
              var obj = new SubmissionEntity();
              expect(obj).toBeInstanceOf(SubmissionEntity);
            });
          });
        
        describe("SubmissionResponse model", () => {
            test("constructor", () => {
              var obj = new SubmissionResponse();
              expect(obj).toBeInstanceOf(SubmissionResponse);
            });
          });
        
        describe("CommunicationEmailTemplate model", () => {
            test("constructor", () => {
              var obj = new CommunicationEmailTemplate();
              expect(obj).toBeInstanceOf(CommunicationEmailTemplate);
            });
          });
        
        describe("CommunicationPortalEmail model", () => {
            test("constructor", () => {
              var obj = new CommunicationPortalEmail();
              expect(obj).toBeInstanceOf(CommunicationPortalEmail);
            });
          });
        
        describe("CommunicationPortalEmailNonprofit model", () => {
            test("constructor", () => {
              var obj = new CommunicationPortalEmailNonprofit();
              expect(obj).toBeInstanceOf(CommunicationPortalEmailNonprofit);
            });
          });
        
        describe("CommunicationPortalEmailRecipients model", () => {
            test("constructor", () => {
              var obj = new CommunicationPortalEmailRecipients();
              expect(obj).toBeInstanceOf(CommunicationPortalEmailRecipients);
            });
          });
        
        describe("CommunicationPortalGetFoundationEmailsResponse model", () => {
            test("constructor", () => {
              var obj = new CommunicationPortalGetFoundationEmailsResponse();
              expect(obj).toBeInstanceOf(CommunicationPortalGetFoundationEmailsResponse);
            });
          });
        
        describe("CommunicationPortalGetFoundationEmailsRequest model", () => {
            test("constructor", () => {
              var obj = new CommunicationPortalGetFoundationEmailsRequest();
              expect(obj).toBeInstanceOf(CommunicationPortalGetFoundationEmailsRequest);
            });
          });
        
        describe("CommunicationPortalGetFoundationEmailResponse model", () => {
            test("constructor", () => {
              var obj = new CommunicationPortalGetFoundationEmailResponse();
              expect(obj).toBeInstanceOf(CommunicationPortalGetFoundationEmailResponse);
            });
          });
        
        describe("DocumentItemResponse model", () => {
            test("constructor", () => {
              var obj = new DocumentItemResponse();
              expect(obj).toBeInstanceOf(DocumentItemResponse);
            });
          });
        
        describe("TaskWithSubmission model", () => {
            test("constructor", () => {
              var obj = new TaskWithSubmission();
              expect(obj).toBeInstanceOf(TaskWithSubmission);
            });
          });
        
        describe("SalesforceLoginURL model", () => {
            test("constructor", () => {
              var obj = new SalesforceLoginURL();
              expect(obj).toBeInstanceOf(SalesforceLoginURL);
            });
          });
        
        describe("SalesforceLoginRequest model", () => {
            test("constructor", () => {
              var obj = new SalesforceLoginRequest();
              expect(obj).toBeInstanceOf(SalesforceLoginRequest);
            });
          });
        
        describe("FoundationSearchResponse model", () => {
            test("constructor", () => {
              var obj = new FoundationSearchResponse();
              expect(obj).toBeInstanceOf(FoundationSearchResponse);
            });
          });
        
        describe("FoundationSearchQuery model", () => {
            test("constructor", () => {
              var obj = new FoundationSearchQuery();
              expect(obj).toBeInstanceOf(FoundationSearchQuery);
            });
          });
        
        describe("FoundationSearchBarQuery model", () => {
            test("constructor", () => {
              var obj = new FoundationSearchBarQuery();
              expect(obj).toBeInstanceOf(FoundationSearchBarQuery);
            });
          });
        
        describe("NonprofitSearchEntity model", () => {
            test("constructor", () => {
              var obj = new NonprofitSearchEntity();
              expect(obj).toBeInstanceOf(NonprofitSearchEntity);
            });
          });
        
        describe("NonprofitSearchResponse model", () => {
            test("constructor", () => {
              var obj = new NonprofitSearchResponse();
              expect(obj).toBeInstanceOf(NonprofitSearchResponse);
            });
          });
        
        describe("NonprofitSearchQuery model", () => {
            test("constructor", () => {
              var obj = new NonprofitSearchQuery();
              expect(obj).toBeInstanceOf(NonprofitSearchQuery);
            });
          });
        
        describe("UniversalSearchDocument model", () => {
            test("constructor", () => {
              var obj = new UniversalSearchDocument();
              expect(obj).toBeInstanceOf(UniversalSearchDocument);
            });
          });
        
        describe("UniversalSearchResponse model", () => {
            test("constructor", () => {
              var obj = new UniversalSearchResponse();
              expect(obj).toBeInstanceOf(UniversalSearchResponse);
            });
          });
        
        describe("UniversalSearchQuery model", () => {
            test("constructor", () => {
              var obj = new UniversalSearchQuery();
              expect(obj).toBeInstanceOf(UniversalSearchQuery);
            });
          });
        
        describe("TaskSearchResponse model", () => {
            test("constructor", () => {
              var obj = new TaskSearchResponse();
              expect(obj).toBeInstanceOf(TaskSearchResponse);
            });
          });
        
        describe("TaskSearchQuery model", () => {
            test("constructor", () => {
              var obj = new TaskSearchQuery();
              expect(obj).toBeInstanceOf(TaskSearchQuery);
            });
          });
        
        describe("TaskComment model", () => {
            test("constructor", () => {
              var obj = new TaskComment();
              expect(obj).toBeInstanceOf(TaskComment);
            });
          });
        
        describe("BulkTaskSubmissionRequest model", () => {
            test("constructor", () => {
              var obj = new BulkTaskSubmissionRequest();
              expect(obj).toBeInstanceOf(BulkTaskSubmissionRequest);
            });
          });
        
        describe("UserBearer model", () => {
            test("constructor", () => {
              var obj = new UserBearer();
              expect(obj).toBeInstanceOf(UserBearer);
            });
          });
        
        describe("GetNonprofitResult model", () => {
            test("constructor", () => {
              var obj = new GetNonprofitResult();
              expect(obj).toBeInstanceOf(GetNonprofitResult);
            });
          });
        
        describe("GetNonprofitMetadataResult model", () => {
            test("constructor", () => {
              var obj = new GetNonprofitMetadataResult();
              expect(obj).toBeInstanceOf(GetNonprofitMetadataResult);
            });
          });
        
        describe("GetNonprofitUserResult model", () => {
            test("constructor", () => {
              var obj = new GetNonprofitUserResult();
              expect(obj).toBeInstanceOf(GetNonprofitUserResult);
            });
          });
        