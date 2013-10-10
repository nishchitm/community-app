define(['underscore', 'mifosX'], function() {
  var components = {
    models: [
      'LoggedInUser',
      'roleMap'
    ],
    services: [
      'ResourceFactoryProvider',
      'HttpServiceProvider',
      'AuthenticationService',
      'SessionManager',
      'Paginator'
    ],
    controllers: [
      'main/MainController',
      'main/LoginFormController',
      'main/TaskController',
      'main/SearchController',
      'main/NavigationController',
      'collection/EnterCollectionSheetController',
      'loanAccount/ViewLoanDetailsController',
      'loanAccount/NewLoanAccAppController',
      'loanAccount/LoanAccountActionsController',
      'loanAccount/AddLoanChargeController',
      'loanAccount/AddLoanCollateralController',
      'loanAccount/AssignLoanOfficerController',
      'loanAccount/EditLoanAccAppController',
      'loanAccount/ViewLoanCollateralController',
      'loanAccount/EditLoanCollateralController',
      'loanAccount/ViewLoanChargeController',
      'loanAccount/EditLoanChargeController',
      'loanAccount/NewJLGLoanAccAppController',
      'groups/AssignStaffController',
      'client/ClientController',
      'client/EditClientController',
      'client/ViewClientController',
      'client/CreateClientController',
      'client/TransactionClientController',
      'client/ClientActionsController',
      'client/ClientDocumentController',
      'product/LoanProductController',
      'product/CreateLoanProductController',
      'product/CreateSavingProductController',
      'product/EditSavingProductController',
      'product/EditLoanProductController',
      'product/ChargeController',
      'product/ViewChargeController',
      'product/SavingProductController',
      'product/ViewSavingProductController',
      'product/ViewLoanProductController',
      'user/UserController',
      'user/UserFormController',
      'user/UserSettingController',
      'user/UserListController',
      'user/ViewUserController',
      'organization/RoleController',
      'organization/ViewRoleController',
      'organization/CreateRoleController',
      'organization/EditPermissionsController',
      'organization/MakerCheckerController',
      'organization/OfficesController',
      'organization/ViewOfficeController',
      'organization/CreateOfficeController',
      'organization/EditOfficeController',
      'organization/CurrencyConfigController',
      'organization/CreateUserController',
      'organization/EditUserController',
      'organization/ViewEmployeeController',
      'organization/EditEmployeeController',
      'organization/EmployeeController',
      'organization/CreateEmployeeController',
      'organization/ManageFundsController',
      'accounting/AccFreqPostingController',
      'accounting/AccCoaController',
      'accounting/AccCreateGLAccountContoller',
      'accounting/AccViewGLAccountContoller',
      'accounting/AccEditGLAccountController',
      'accounting/ViewTransactionController',
      'accounting/JournalEntryController',
      'accounting/SearchTransactionController',
      'accounting/AccountingClosureController',
      'accounting/AccountingRuleController',
      'accounting/AccCreateRuleController',
      'accounting/AccEditRuleController',
      'accounting/ViewAccRuleController',
      'system/CodeController',
      'system/EditCodeController',
      'system/ViewCodeController',
      'system/AddCodeController',
      'system/ViewDataTableController',
      'system/DataTableController',
      'system/ReportsController',
      'system/ViewReportController',
      'system/CreateReportController',
      'system/EditReportController',
      'system/CreateDataTableController',
      'system/EditDataTableController',
      'system/MakeDataTableEntryController',
      'system/DataTableEntryController',
      'system/SchedulerJobsController',
      'system/ViewSchedulerJobController',
      'system/EditSchedulerJobController',
      'system/ViewSchedulerJobHistoryController',
      'organization/HolController',
      'organization/ViewHolController',
      'organization/AddHolController',
      'reports/ViewReportsController',
      'reports/RunReportsController',
      'savings/CreateSavingAccountController',
      'savings/ViewSavingDetailsController',
      'private/SuperuserController',
      'groups/GroupController',
      'groups/ViewGroupController',
      'groups/AttachMeetingController',
      'savings/EditSavingAccountController',
      'savings/SavingAccountActionsController',
      'accounttransfers/ViewAccountTransferDetailsController',
      'accounttransfers/MakeAccountTransferController',
      'savings/ViewTransactionController',
      'groups/CreateGroupController',
      'groups/AddMemberController',
      'groups/EditGroupController',
      'groups/GroupAttendanceController',
      'groups/CloseGroupController',
      'groups/AddRoleController',
      'groups/MemberManageController',
      'groups/TransferClientsController',
      'centers/CenterController',
      'centers/ViewCenterController',
      'centers/CreateCenterController',
      'centers/EditCenterController',
      'centers/CloseCenterController',
      'centers/AddGroupController',
      'centers/CenterAttendanceController',
      'product/CreateChargeController',
      'product/EditChargeController',
      'configurations/GlobalConfigurationController',
      'product/productmix/ProductMixController',
      'product/productmix/ViewProductMixController',
      'product/productmix/AddProductMixController',
      'organization/BulkLoanReassignmentController'
    ],
    filters: [
      'StatusLookup'
    ],
    directives: [
      'DataTablesDirective',
      'OverlayDirective',
      'DialogDirective',
      'PanelDirective',
      'BigPanelDirective',
      'OnBlurDirective',
      'LateValidateDirective'
    ]
  };

  require(_.reduce(_.keys(components), function(list, group) {
    return list.concat(_.map(components[group], function(name) { return group + "/" + name; }));
  }, [
    'routes',
    'initialTasks',
    'webstorage-configuration'
  ]));
});
