describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server to allServers on submitServerInfo() with an empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update the server table on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let currentServerList = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentServerList.length).toEqual(3);
    expect(currentServerList[0].innerText).toEqual('Alice');
    expect(currentServerList[1].innerText).toEqual('$0.00');
    expect(currentServerList[2].innerText).toEqual('X');
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
