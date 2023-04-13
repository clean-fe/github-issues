class IssueResponseDTO {
  constructor(
      title,
      _id,
      tags,
      status,
      openDate,
      creator,
      projects,
      milestones,
      assignee,
      subtask,
      commentsCount
  ) {
    this.title = title;
    this._id = _id;
    this.tags = tags;
    this.status = status;
    this.openDate = openDate;
    this.creator = creator;
    this.projects = projects;
    this.milestones = milestones;
    this.assignee = assignee;
    this.subtask = subtask;
    this.commentsCount = commentsCount;
  }
}

class Tag {
  constructor(tagName, color) {
    this.tagName = tagName;
    this.color = color;
  }
}

export {
  IssueResponseDTO,
  Tag
}
