module.exports = {
  daysUntilClose: 7,
  perform: !process.env.DRY_RUN,
  responseRequiredLabel: 'status-needsinfo',
  responseRequiredColor: 'fbca04',
  staleMilestone: 7,
  reopenedMilestone: 1,
  closeComment:
    'This issue has been automatically closed because there has been no response ' +
    'to our request for more information from the original author. With only the ' +
    'information that is currently in the issue, we don\'t have enough information ' +
    'to take action. Please reach out if you have or find the answers we need so ' +
    'that we can investigate further.'
}
