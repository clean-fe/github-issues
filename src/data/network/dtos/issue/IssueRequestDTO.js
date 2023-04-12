class IssueRequestDTO {
  constructor(
      title,
      tags,
      status,
      openDate,
      creator,
      projects,
      milestones,
      assignee,
      subtask,
  ) {
    this.title = title;
    this.tags = tags;
    this.status = status;
    this.openDate = openDate;
    this.creator = creator;
    this.projects = projects;
    this.milestones = milestones;
    this.assignee = assignee;
    this.subtask = subtask;
  }
}

class Tag {
  constructor(tagName, color) {
    this.tagName = tagName;
    this.color = color;
  }
}

export {
  IssueRequestDTO,
  Tag
}
