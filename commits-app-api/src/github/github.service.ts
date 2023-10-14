  import { Injectable } from '@nestjs/common';
  import { CreateGithubDto } from './dto/create-github.dto';
  import { UpdateGithubDto } from './dto/update-github.dto';
  import { Octokit } from '@octokit/core';
  
  @Injectable()
  export class GithubService {
  
    private owner : string = 'ldini';
    private repo : string = 'commits-app'
  
    constructor(private readonly octokit: Octokit) {
  
    }
  
    //"List repository activities"
    async getCommits() {
      try {
        const resp = await this.octokit.request(`GET /repos/${this.owner}/${this.repo}/commits`);
  
        return await this.cleanCommitsData(resp.data);
      } 
      catch (error) {
        throw new Error(`Error fetching commits: ${error}`);
      }
    }
  
    private cleanCommitsData(data) {
      let cleanedData = {
          "name_repo": this.repo,
          "commits": data.map(item => {
              return {
                  
                      "author": {
                          "name": item.commit.author.name,
                          "email": item.commit.author.email,
                          "date": item.commit.author.date
                      },
                      "message": item.commit.message,
                      "avatar_url": item.committer.avatar_url
                  
              };
          })
      };
  
      return cleanedData;
  }
  }
