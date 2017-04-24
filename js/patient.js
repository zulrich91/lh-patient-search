$(document).ready(function() {

  var patientTable = $('#patientTable').DataTable({
    "processing": true,
    "serverSide": true,
    "ajax": {
      url: "http://localhost:8080/lh-toolkit/ws/rest/v1/patient?identifier=100AHG",
      cache: true,
      dataType: "json",
      type: "GET",
      headers: {
        Accept: "application/json; charset=utf-8",
        "Content-Type": "text/plain; charset=utf-8"
      },
      "data": function(data) {
        return {
          startIndex: data.start,
          limit: data.length,
          v: "full",
          totalCount: true,
        };
      },
      "dataFilter": function(data) {
        var json = $.parseJSON(data);
        json.recordsTotal = json.totalCount || 0;
        json.recordsFiltered = json.totalCount || 0;
        json.data = json.results;
        return JSON.stringify(json);
      },
      error: function (xhr, ajaxOptions, error) {
        console.log("Failed to retrive patient: "+ xhr.status + " " + error);
      }
    },
    "columns": [
      {
        "name": "Identifier",
        "render": function(data, type, full, meta) {
          return full.identifier;
        }
      },
      {
        "name": "Patient Name",
        "render": function(data, type, full, meta) {
          return full.name;
        }
      },
      {
        "name": "Gender",
        "render": function(data, type, full, meta) {
              return full.gender;
        }
      },
      {
        "name": "Age",
        "render": function(data, type, full, meta) {
          return full.age;
        }
      },
      {
        "name": "Birthday",
        "render": function(data, type, full, meta) {
          return full.birthday;
        }
      }
    ]
  });
});

