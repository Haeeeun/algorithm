const solution = (tickets) => {
    let answer = [];
    const DFS = (airport, tickets, path) => {
        let newPath = [...path, airport];
        console.log('newPath',newPath)
        if(tickets.length === 0){
            answer.push(newPath);
        } else {
            tickets.map((ticket, index) => {
                if(ticket[0] === airport){
                    let copiedTickets = [...tickets];
                    const [[from, to]] = copiedTickets.splice(index, 1);
                    DFS(to, copiedTickets, newPath)
                }
            })
        }
    }
    DFS("ICN", tickets, []);
    return answer.sort()[0]
}