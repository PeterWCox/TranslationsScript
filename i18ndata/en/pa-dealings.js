// Copyright (c) Leo RegTech Limited. All rights reserved.

export default {
  tradeRequest: "Trade Request",
  allAccounts: "All Accounts",
  employee: "Employee",
  filter: "Filter",
  requestedOn: "Requested On",
  shares: "Shares",
  numberOfShares: "Number of Shares",
  executed: "Executed",
  notExecuted: "Not Executed",
  executedOn: "Executed On",
  includeReviewed: "Include Reviewed",
  reviewed: "Reviewed",
  requested: "Requested",
  requestedBy: "Requested By",
  approve: {
    approve: "Approve",
    approved: "Approved",
    approving: "Approving",
    autoApproved: "Auto-Approved",
    tradeRequest: "Approve Trade Request",
    manual: "Manually Approved",
  },
  reject: {
    reject: "Reject",
    rejected: "Rejected",
    rejecting: "Rejecting",
    autoRejected: "Auto-Rejected",
    tradeRequest: "Reject Trade Request",
    manual: "Manually Rejected",
  },
  reason: "Reason for Status Change",
  actionedBy: "Actioned By",
  actionedOn: "Actioned On",
  saveChanges: "Save Changes",
  futureDateExecution: "A trade cannot have an execution date in the future",
  date: {
    compareErrorMessage: "Date to must be after Date from",
    from: "Date From",
    to: "Date To",
  },
  statement: {
    edit: "Edit Statement",
    filename: "Statement Filename",
    clickToUpload: "Click here to upload a statement",
    uploadWarning:
      "Uploading a statement will remove the existing statement – continue?",
    missing: "Missing Statements",
    statements: "Statements",
    upload: "Upload Statement",
    deleteWarning: "Are you sure you want to delete this statement?",
    reminderOptions:
      "How frequently are users expected to upload covered account statements?",
  },
  uploadError: "Upload Error",
  warning: "Warning",
  tradeExecuted: "Trade Executed",
  tradeRequests: "Trade Requests",
  searchTradeRequests: "Search Trade Requests",
  month: "Month",
  paDealing: "Personal Account Dealing",
  request: {
    request: "Request",
    saving: "Saving Request",
    new: "New Request",
    filter: "Filter Requests",
    from: "Request From",
    to: "Request To",
    title: {
      submitted: "Request Submitted",
      approved: "Request Approved",
      denied: "Request Denied",
      error: "Error",
    },
    message: {
      submitted:
        "Your personal account dealing request has been submitted but requires approval from the Compliance team.\n\nPlease contact the Compliance team if you have additional questions.",
      approved: "Your personal account dealing request has been approved.",
      transactionDue: "You have until {0} to complete the transaction.",
      denied:
        "Your personal account dealing request has been denied.\n\nPlease contact the Compliance team if you have additional questions.",
      error:
        "There was an error submitting your request.\n\nPlease verify the values entered.",
    },
  },
  previousPage: "Previous Page",
  nextPage: "Next Page",
  validUntil: "Valid Until",
  tableView: "Table View",
  tickerSymbol: "Ticker Symbol",
  value: "Value",
  noResultsFound: "No results found. Please adjust your search critera.",
  minimum: "Minimum",
  maximum: "Maximum",
  manageAccounts: "Manage Accounts",
  coveredAccountAsk:
    "Please ask your Administrator to configure an account for you.",
  valueOrNumberOfShares:
    "You may enter the Value or the Number of Shares. You do not need to enter both.",
  unreviewTradeRequestDialog: {
    title: "Confirm unreviewing trade request {0} for {1}",
    message:
      "Before proceeding, please confirm your intention to indicate a PA deal that was previously reviewed as unreviewed.",
  },
  unreviewTradeStatementDialog: {
    title: "Confirm unreviewing trade statement '{0}' for {1}",
    message:
      "Before proceeding, please confirm your intention to indicate a PA statement that was previously reviewed as unreviewed.",
  },
};
