function getType(priority) {
  switch (priority) {
    case 0:
      return "No Priority";
    case 1:
      return "Low";
    case 2:
      return "Medium";
    case 3:
      return "High";
    default:
      return "Urgent";
  }
}

function sortByOrdering(data, Ordering) {
  switch (Ordering) {
    case "Priority":
      for (let key in data) {
        data[key].sort((a, b) => b.priority - a.priority);
      }
      break;
    default:
      for (let key in data) {
        data[key].sort((a, b) => a.title.localeCompare(b.title));
      }
  }
  return data;
}

function reduceByStatus(tickets) {
  return tickets.reduce(
    (acc, ticket) => {
      if (!acc[ticket.status]) acc[ticket.status] = [];
      acc[ticket.status].push(ticket);
      return acc;
    },
    {
      Backlog: [],
      Todo: [],
      "In progress": [],
      Done: [],
      Canceled: [],
    }
  );
}

function reduceByUsers(tickets, users) {
  return tickets.reduce((acc, ticket) => {
    const idx = ticket.userId.replace("usr-", "") - 1;
    if (!acc[users[idx].name]) acc[users[idx].name] = [];
    acc[users[idx].name].push({ ...ticket, idx });
    return acc;
  }, {});
}

function reduceByPriority(tickets) {
  return tickets.reduce(
    (acc, ticket) => {
      const type = getType(ticket.priority);
      if (!acc[type]) acc[type] = [];
      acc[type].push(ticket);
      return acc;
    },
    {
      "No Priority": [],
      Urgent: [],
      High: [],
      Medium: [],
      Low: [],
    }
  );
}

function injectUser(tickets, users) {
  let mp = new Map();
  users.forEach((user) => {
    mp.set(user.id, user);
  });
  return tickets.map((ticket) => ({
    ...ticket,
    userDetail: mp.get(ticket.userId),
  }));
}

function sortByGrouping(Grouping, tickets, users) {
  let data;
  tickets = injectUser(tickets, users);
  switch (Grouping) {
    case "Status":
      data = reduceByStatus(tickets);
      break;
    case "User":
      data = reduceByUsers(tickets, users);
      break;
    default:
      data = reduceByPriority(tickets);
  }
  return data;
}

export function sortByOptions(details, tickets, users) {
  const { Grouping, Ordering } = details;
  let data;
  data = sortByGrouping(Grouping, tickets, users);
  data = sortByOrdering(data, Ordering);
  return data;
}
