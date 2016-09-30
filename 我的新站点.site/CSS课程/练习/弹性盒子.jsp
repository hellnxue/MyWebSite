<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>菜鸟教程(runoob.com)</title>
</head>
<body>

<h2>forward 动作实例</h2>
<%
  request.setAttribute("name","蜡笔小新");
%>
<jsp:forward page="forward.jsp" />
</body>
</html>