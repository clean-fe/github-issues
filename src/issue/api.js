export const filterStatus = (status) => async (data) => {
  const issueList = await data;
  return issueList.filter((item) => item.status === status);
};

export const mapIssue = async (data) => {
  const issueList = await data;
  return issueList.map(({ title, tags, _id, status, openDate, milestones }) => ({
    title,
    tags,
    _id,
    status,
    openDate,
    milestones,
  }));
};
