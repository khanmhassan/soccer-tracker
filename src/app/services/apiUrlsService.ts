import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiUrlsService {

  // comments apis
  public static findAllComments = environment.domain + '/api/comment';
  public static createComment = environment.domain + '/api/comment';
  public static deleteComment = environment.domain + '/api/comment/';

  public static findTeamDetails = environment.fdomain + '/teams/team/';
  public static findTeamFixtures = environment.fdomain + '/fixtures/team/';
  public static findLeagueStandings = environment.fdomain + '/leagueTable/';
  public static findLiveFixtures = environment.fdomain + '/fixtures/live';
  public static findLeagueDetails = environment.fdomain + '/leagues/league/';
}