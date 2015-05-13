<?php

	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");

	/**
	 * Realiza busca de todos os registro na base de dados
	 */
	if (isset($_GET['org_listdata'])) {
		require_once("../../components/DB/DataBase.php");
		$DataBase = new DataBase();
		$ret = json_decode($DataBase->select("SELECT * FROM organizacao"));

		foreach ($ret as $row) {
			print_r(
				'<tr>'.
				'	<td class="project-status" width="10">'.
				'		<span class="label label-primary">Ativo</span>'.
				'	</td>'.
				'	<td class="project-title">'.
				'		<a href="project_detail.html">'. $row->{'org_razao'} .'</a>'.
				'		<br/>'.
				'		<small>Cadastrado desde 01/02/2015</small>'.
				'	</td>'.
				'	<td class="project-actions">'.
				'		<a href="" onclick="org.edit('. $row->{'org_id'} .')" class="btn btn-white btn-sm"><i class="fa fa-pencil"></i> Editar</a>'.
				'	</td>'.
				'</tr>'
			);
		}

		$DataBase->close();
	}

	/**
	 * Realiza busca para o campo pesquisar
	 */
	if (isset($_GET['org_pesquisa'])) {
		
		$pesq = preg_replace('/[^[:alpha:]_]/', '',$_GET['org_pesquisa']);
		
		require_once("../../components/DB/DataBase.php");
		$DataBase = new DataBase();
		$ret = json_decode($DataBase->select("SELECT * FROM organizacao WHERE org_razao LIKE '%".$pesq."%'"));

		foreach ($ret as $row) {
			print_r(
				'<tr>'.
				'	<td class="project-status" width="10">'.
				'		<span class="label label-primary">Ativo</span>'.
				'	</td>'.
				'	<td class="project-title">'.
				'		<a href="project_detail.html">'. $row->{'org_razao'} .'</a>'.
				'		<br/>'.
				'		<small>Cadastrado desde 01/02/2015</small>'.
				'	</td>'.
				'	<td class="project-actions">'.
				'		<a href="" onclick="org.edit('. $row->{'org_id'} .')" class="btn btn-white btn-sm"><i class="fa fa-pencil"></i> Editar</a>'.
				'	</td>'.
				'</tr>'
			);
		}

		$DataBase->close();
	}