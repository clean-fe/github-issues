export const filterStatus = (status) => (list) => list.filter((item) => item.status === status);

export const mapIssue = (list) =>
  list.map(({ title, tags, _id, status, openDate, milestones }) => ({
    title,
    tags,
    _id,
    status,
    openDate,
    milestones,
  }));
